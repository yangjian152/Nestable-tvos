import Config from 'react-native-config';

Object.assign(
  process.env,
  Object.keys(Config).reduce((acc, key) => {
    // expand to key exclude list eventually?
    if (typeof Config[key] === 'string' && !process.env[key]) {
      acc[key] = Config[key];
    }

    return acc;
  }, {}),
);

export default process.env;
