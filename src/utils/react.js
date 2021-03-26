import { Component } from 'react';

const reactUtils = {
  setStateAsync: (context) => {
    if (!(context instanceof Component)) {
      throw new TypeError('First Argument must be instance of React Component');
    }
    const setStateAsync = (payload) => new Promise((resolve) => context.setState(payload, resolve));
    // eslint-disable-next-line no-param-reassign
    context.setStateAsync = setStateAsync;

    return setStateAsync;
  }
};

export default reactUtils;
