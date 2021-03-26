import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import { graphqlFetchUtils } from "../utils";

export const fetchVideoById = async (videoId) => API
  .graphql(graphqlOperation(queries.getVideo, {
    id: videoId
  }))
  .then(res => res?.data?.getVideo)

export const searchVideosByCategory = async (limit = 10, useNextToken, topics) => API
  .graphql(graphqlOperation(queries.searchVideoCategoriess, {
    limit,
    ...topics && topics.length && {
      filter: {
        or: topics.map(topic => ({ videoCategoriesCategoryId: { eq: topic }}))
      }
    },
    ...useNextToken && { nextToken: useNextToken }
  })).then((res) => {
    const data = res?.data?.searchVideoCategoriess

    // remove missing videos
    let items = data?.items.filter((item => !!item.video)) ?? []
    // deduplicate
    items = items.filter((item, i) => items.findIndex(item2 => item2.videoCategoriesVideoId === item.videoCategoriesVideoId) === i)
    return { ...data, items }
  })

export const fetchVideoFeed = async (limit = 10, useNextToken = null, topics) => {
  let data

  if (topics && topics.length) {
    data = await searchVideosByCategory(limit, useNextToken, topics)
  } else {
    data = await API.graphql(graphqlOperation(queries.listVideos, {
      limit,
      ...useNextToken && { nextToken: useNextToken }
    })).then((res) => res.data.listVideos)
  }

  // build video and randomize
  const allVideos = await Promise.all(data.items
    // create video object
    .map(async(record) => ({
      ...await graphqlFetchUtils.buildVideoObject(topics && topics.length ? record.video : record),
      sort: Math.random()
    }))
  ).then(videos => videos.sort((a, b) => a.sort - b.sort))

  return { videos: allVideos, nextToken: data.nextToken };
}

export const fetchUserVideos = async( userId, { sortDirection = 'asc', limit = 10, nextToken = null } = {}) => {
  const response = await API.graphql(graphqlOperation(queries.searchVideos, {
    filter: {
      videoUserId: { eq: userId },
    },
    limit,
    sort: {
      field: 'createdAt',
      direction: sortDirection
    },
    ...nextToken && { nextToken }
  }))

  const { items, nextToken: token } = response.data.searchVideos

  const videos = await Promise.all(
    items.map((video) => graphqlFetchUtils.buildVideoObject(video))
  )

  return [videos, token]
}

export const searchVideos = async({ sortDirection = 'asc', limit = 10, ...rest } = {}) => {
  const response = await API.graphql(graphqlOperation(queries.searchVideos, {
    sort: {
      field: 'createdAt',
      direction: sortDirection
    },
    limit,
    ...rest
  }))

  const { items, nextToken: token } = response.data.searchVideos

  const videos = await Promise.all(
    items.map((video) => graphqlFetchUtils.buildVideoObject(video))
  )

  return [videos, token]
}

export const fetchLikedVideos = async( userId, { sortDirection = 'asc', limit = 10, nextToken = null } = {}) => {
  const response = await API.graphql(graphqlOperation(queries.searchLikedVideos, {
    filter: {
      likedVideoUserId: { eq: userId },
    },
    limit,
    sort: {
      field: 'createdAt',
      direction: sortDirection
    },
    ...nextToken && { nextToken }
  }))

  const { items, nextToken: token } = response.data.searchLikedVideos

  const videos = await Promise.all(
    items.map((item) => graphqlFetchUtils.buildVideoObject(item.video))
  )

  return [videos, token]
}

export const setBackgroundVideo = async(userId, key) => API
  .graphql(graphqlOperation(mutations.updateUserProfile, {
    input: { id: userId, backgroundVideoPath: key }
  }))
  .then(res => res?.data?.updateUserProfile)

export const saveVideo = async (s3Key, values) => API
  .graphql(graphqlOperation(mutations.createVideo, {
    input: { videoFullPath: s3Key, ...values }
  }))
  .then(res => res?.data?.createVideo)

export const generateThumbnail = async (videoId) => API
  .graphql(graphqlOperation(mutations.generateThumbnail, {
    id: videoId
  }))
  .then(res => res?.data?.generateThumbnail)

// TODO: do this sever side when migrating away from amplify (or in a lambda)
export const markVideoViewed = async (videoId, userId) => {
  const [video, profile] = await Promise.all([
    API
      .graphql(graphqlOperation(queries.getVideo, { id: videoId }))
      .then((res) => res.data.getVideo),
    API
      .graphql(graphqlOperation(queries.getUserProfile, { id: userId }))
      .then((res) => res.data.getUserProfile),
  ])

  return Promise.all([
    API.graphql(graphqlOperation(mutations.updateVideo, {
      input: { id: video.id, viewCount: (video.viewCount || 0) + 1 }
    })),
    API.graphql(graphqlOperation(mutations.updateUserProfile, {
      input: { id: profile.id, viewsCount: (profile.viewsCount || 0) + 1 }
    }))
  ])
}

export const getVideoLikeStatus = async (videoId, userId) => API
  .graphql(graphqlOperation(queries.searchLikedVideos, {
    filter: {
      likedVideoUserId: { eq: userId },
      likedVideoVideoId: { eq: videoId }
    }
  }))
  .then(res => res?.data?.searchLikedVideos?.items[0]?.id)

// TODO: do this sever side when migrating away from amplify (or in a lambda)
export const likeVideo = async (videoId, videoUserId, userId) => {
  const [profile, video] = await Promise.all([
    API
      .graphql(graphqlOperation(queries.getUserProfile, { id: videoUserId }))
      .then((res) => res.data.getUserProfile),
    API
      .graphql(graphqlOperation(queries.getVideo, { id: videoId }))
      .then((res) => res.data.getVideo)
  ])

  const [likedVideo] = await Promise.all([
    API
      .graphql(graphqlOperation(mutations.createLikedVideo, {
        input: {
          likedVideoVideoId: videoId,
          likedVideoUserId: userId
        }
      }))
      .then((res) => res?.data?.createLikedVideo),
    API
      .graphql(graphqlOperation(mutations.updateUserProfile, {
        input: { id: profile.id, likesCount: (profile.likesCount || 0) + 1 }
      })),
    API
      .graphql(graphqlOperation(mutations.updateVideo, {
        input: { id: videoId, likeCount: (video.likeCount || 0) + 1 }
      }))
    ])
  return likedVideo
}

// TODO: do this sever side when migrating away from amplify (or in a lambda)
export const removeLikeVideo = async (likeVideoId, videoId, videoUserId) => {
  const [profile, video] = await Promise.all([
    API
      .graphql(graphqlOperation(queries.getUserProfile, { id: videoUserId }))
      .then((res) => res.data.getUserProfile),
    API
      .graphql(graphqlOperation(queries.getVideo, { id: videoId }))
      .then((res) => res.data.getVideo)
  ])

  return Promise.all([
    API
      .graphql(graphqlOperation(mutations.deleteLikedVideo, {
        input: { id: likeVideoId }
      })),
    API
      .graphql(graphqlOperation(mutations.updateUserProfile, {
        input: { id: profile.id, likesCount: (profile.likesCount || 0) - 1 }
      })),
    API
      .graphql(graphqlOperation(mutations.updateVideo, {
        input: { id: videoId, likeCount: (video.likeCount || 0) - 1 }
      }))
  ])
}

export const removeVideo = async (videoId) => API
  .graphql(graphqlOperation(mutations.deleteVideo, {
    input: { id: videoId }
  }))
  .then(res => res?.data?.deleteVideo)
