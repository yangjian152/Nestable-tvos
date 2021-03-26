import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../graphql/queries';

export const getTopics = async (limit = 100) => API
  .graphql(graphqlOperation(queries.listCategorys, { limit }))
  .then(res => res?.data?.listCategorys?.items)

export const getTopicById = async(id) => API
  .graphql(graphqlOperation(queries.getCategory, { id }))
  .then(res => res?.data?.getCategory)

export const getTopicsForVideo = async(videoId) => API
  .graphql(graphqlOperation(queries.searchVideoCategoriess, {
    filter: {
      videoCategoriesVideoId: { eq: videoId }
    }
  }))
  .then(res => res?.data?.searchVideoCategoriess?.items)
