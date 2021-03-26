import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import validatorUtils from './validators';

const authUtils = {
  signUp: async (signUpPayload) => {
    const { poolId } = await authUtils.authSignUp(signUpPayload);
    const { id: profileId } = await authUtils.profileCreate({ ...signUpPayload, poolId });

    return { ...signUpPayload, poolId, profileId };
  },
  logout: async () => Auth.signOut(),
  signUpValidate: ({ password, email, name }) => [
    ...validatorUtils.fullNameValidate(name),
    ...validatorUtils.emailValidate(email),
    ...validatorUtils.passwordValidate(password)
  ],
  authSignUp: async (signUpPayload) => {
    const { email, email:username, password, phoneNumber } = signUpPayload;
    const attributes = {
      // eslint-disable-next-line camelcase
      ...(phoneNumber ? { phone_number: phoneNumber } : {}),
      email
    };
    const result = await Auth.signUp({ password, username, attributes });

    return { ...result, poolId: result.userSub };
  },
  profileCreate: async ({ name, poolId, email }) => {
    const { data: { createUserProfile } } = await API.graphql(graphqlOperation(mutations.createUserProfile, {input: { name, poolId, email }}));

    return createUserProfile;
  },
  authSigIn: async (email, password) => {
    const result = await Auth.signIn(email, password);

    return { ...result };
  },
  authConfirmCode: async (email, code) => {
    const result = await Auth.confirmSignUp(email, code);

    return { ...result };
  },
  authCurrentUser: async (opts = {}) => {
    const { bypassCache = false } = opts;
    const { username: poolId, attributes: { email } } = await Auth.currentAuthenticatedUser({ bypassCache });
    const profileResult = await API.graphql(graphqlOperation(queries.searchUserProfiles, { limit: 1, filter: { poolId: { match: poolId } } }));

    const metaData = profileResult.data?.searchUserProfiles?.items[0]
    return { poolId, email, fullName: metaData?.name, ...metaData };
  },
  updateProfile: async (payload, poolId) => {
    const result = await authUtils.authUpdateProfile(payload, { poolId });

    return { ...result };
  },
  authUpdateProfile: async (payload, { poolId }) => {
    const updateResult = await API.graphql(graphqlOperation(mutations.updateUserProfile, { input: { ...payload }, condition: { poolId: { eq: poolId } } }));

    if (!updateResult.data || !updateResult.data.updateUserProfile) {
      return null;
    }

    return updateResult;
  },
  isAuthStoreValid: authPayload => authPayload && authPayload.poolId && authPayload.id
};

export default authUtils;
