const AWS = require("aws-sdk");
const apiNestablmobileapiGraphQLAPIIdOutput = process.env.API_NESTABLMOBILEAPI_GRAPHQLAPIIDOUTPUT || 'mgs4rdjrozdbxg4idmmoof274y'
const apiNestablmobileapiGraphQLAPIEndpointOutput = process.env.API_NESTABLMOBILEAPI_GRAPHQLAPIENDPOINTOUTPUT || 'https://2pg5qth4vzhbdomofa3kbnae5y.appsync-api.us-east-1.amazonaws.com/graphql'
const env = process.env.ENV || 'local'

const documentClient = new AWS.DynamoDB.DocumentClient();
tableSuffix = `-${apiNestablmobileapiGraphQLAPIIdOutput}-${env}`;

module.exports.updateVideo = async (id, { imageThumbnailPath = '', imageFullPath = '', duration }) => {
  const params = {
    TableName: `Video${tableSuffix}`,
    Key: { id },
    UpdateExpression: "set imageThumbnailPath = :thumbnailPath, imageFullPath = :imageFullPath, #duration = :duration, updatedAt = :updatedAt",
    ExpressionAttributeValues: {
      ":thumbnailPath": imageThumbnailPath,
      ":imageFullPath": imageFullPath,
      ":duration": duration,
      ":updatedAt": new Date().toISOString()
    },
    ExpressionAttributeNames: {
      '#duration': 'duration'
    },
    ReturnValues:"UPDATED_NEW"
  };

  return documentClient.update(params).promise();
}

module.exports.getVideo = async (id) => {
  const params = {
    TableName: `Video${tableSuffix}`,
    Key: { id }
  }

  return documentClient.get(params).promise();
}