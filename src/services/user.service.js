import { API, graphqlOperation } from "aws-amplify"
import * as queries from '../graphql/queries';

export const searchUserProfiles = async({ sortDirection = 'asc', limit = 10, ...rest } = {}) => {
  const response = await API.graphql(graphqlOperation(queries.searchUserProfiles, {
    sort: {
      field: 'createdAt',
      direction: sortDirection
    },
    limit,
    ...rest
  }))

  const { items, nextToken: token } = response.data.searchUserProfiles

  return [items, token]
}
