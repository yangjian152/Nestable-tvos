import Amplify, {Auth} from 'aws-amplify';
import AWSAppSyncClient from 'aws-appsync';
import './polyfills';

import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

const client = new AWSAppSyncClient({
  url: awsConfig.aws_appsync_graphqlEndpoint,
  region: awsConfig.aws_appsync_region,
  auth: {
    type: awsConfig.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  disableOffline: true,
});

const ENV = awsConfig.aws_content_delivery_bucket.substring(
  awsConfig.aws_content_delivery_bucket.lastIndexOf('-') + 1,
);

export default client;
export {awsConfig as config, ENV};
