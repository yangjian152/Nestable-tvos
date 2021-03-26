import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import cloudAdapterUtils from './cloudAdapter'
import { getTopicsForVideo } from '../services/topic.service';

const graphqlFetchUtils = {
  user: async(userId) => {
    const response = await API.graphql(graphqlOperation(queries.getUserProfile, {
      id: userId
    }))

    return response.data.getUserProfile
  },

  async buildVideoObject (item) {
    let topics = await getTopicsForVideo(item?.id)
      .then(videos => videos.filter(video => !!video.category?.title))
      .then(videos => videos.map(video => video.category))
    topics = topics.filter((topic, i) => topics.findIndex(topic2 => topic2.id === topic.id) === i)

    return {
      ...item,
      topics,
      user: {
        ...item.user,
        fullName: item?.user?.name
      },
      playTime: item.duration || 80,
      rate: {
        views: 15,
        nestabls: 65,
        comments: 32,
        shares: 12,
        dislikes: 123,
      },
      content: {
        title: item.title,
        body: item.description,
      },
      feed: {
        topic: 'savvySpace',
        body: item.description,
      },
      videoUri: cloudAdapterUtils.videoFeedUrlFromBucket(item.videoFullPath),
      posterUri: cloudAdapterUtils.posterFeedUrlFromBucket(item.imageThumbnailPath),
      avatarUri: item?.user?.avatarPath && cloudAdapterUtils.avatarFeedUrlFromBucket(item.user.avatarPath),
      imageFullPath: cloudAdapterUtils.webpUrlFromBucket(item.imageFullPath)
    }
  }
};

export default graphqlFetchUtils;
