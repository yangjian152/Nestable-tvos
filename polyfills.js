import allSettled from 'promise.allsettled';

export default {
  PromiseAllSettled: (() =>
    (Promise.allSettled = Promise.allSettled || allSettled))(),
};
