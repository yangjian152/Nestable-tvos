import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

export const getFollowStatus = async (followUserId, userId) => API
  .graphql(graphqlOperation(queries.searchFollowingUsers, {
    filter: {
      followingUserFollowedUserId: { eq: userId },
      followingUserFollowingUserId: { eq: followUserId }
    }
  }))
  .then(res => res?.data?.searchFollowingUsers?.items[0])

// TODO: do this sever side when migrating away from amplify (or in a lambda)
export const addFollow = async (followUserId, userId) => {
  const [followProfile, userProfile, oldFollowObject] = await Promise.all([
    API
      .graphql(graphqlOperation(queries.getUserProfile, { id: followUserId }))
      .then((res) => res.data.getUserProfile),
    API
      .graphql(graphqlOperation(queries.getUserProfile, { id: userId }))
      .then((res) => res.data.getUserProfile),
    getFollowStatus(followUserId, userId)
  ])

  if (oldFollowObject) {
    return oldFollowObject
  }

  const [followObject] = await Promise.all([
    API
      .graphql(graphqlOperation(mutations.createFollowingUser, {
        input: {
          followingUserFollowedUserId: userId,
          followingUserFollowingUserId: followUserId
        }
      }))
      .then((res) => res?.data?.createFollowingUser),
    API
      .graphql(graphqlOperation(mutations.updateUserProfile, {
        input: { id: followProfile.id, followerCount: (followProfile.followerCount || 0) + 1 }
      })),
    API
      .graphql(graphqlOperation(mutations.updateUserProfile, {
        input: { id: userProfile.id, followingCount: (userProfile.followingCount || 0) + 1 }
      }))
    ])
  return followObject
}

// TODO: do this sever side when migrating away from amplify (or in a lambda)
export const removeFollow = async (followUserId, userId) => {
  const [followProfile, userProfile, followObject] = await Promise.all([
    API
      .graphql(graphqlOperation(queries.getUserProfile, { id: followUserId }))
      .then((res) => res.data.getUserProfile),
    API
      .graphql(graphqlOperation(queries.getUserProfile, { id: userId }))
      .then((res) => res.data.getUserProfile),
    getFollowStatus(followUserId, userId)
  ])

  if (!followObject) {
    return null
  }

  return Promise.all([
    API
      .graphql(graphqlOperation(mutations.deleteFollowingUser, {
        input: { id: followObject.id }
      }))
      .then((res) => res?.data?.createFollowingUser),
    API
      .graphql(graphqlOperation(mutations.updateUserProfile, {
        input: { id: followProfile.id, followerCount: (followProfile.followerCount || 0) - 1 }
      })),
    API
      .graphql(graphqlOperation(mutations.updateUserProfile, {
        input: { id: userProfile.id, followingCount: (userProfile.followingCount || 0) - 1 }
      }))
    ])
}