import { StackActions } from '@react-navigation/native';

let navigator = null
let callbacks = []

export const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef
  callbacks.forEach(callback => callback())
  callbacks = []
}

const navigationUtils = {
  getNavigation: async () => {
    // navigator not available yet, wait until it is
    if (!navigator) {
      await new Promise((resolve) => {
        callbacks.push(resolve)
      })
    }

    return navigator
  },

  redirectAfterLogin: (timeoutMs = 3000) => new Promise((resolve) => {
    navigationUtils.getNavigation().then(nav => {
      setTimeout(() => {
        nav.dispatch(
          StackActions.replace('main', {
            screen: 'Home',
            params: {
              screen: 'Feed', params: {}
            }
          })
        );
        resolve();
      }, timeoutMs);
    })
    
  }),

  redirectToSelectlistAfterLogin: (timeoutMs = 3000) => new Promise((resolve) => {
    const nav = navigationUtils.getNavigation()
    setTimeout(() => {
      nav.navigate('main', {
        screen: 'Home',
        params: {
          screen: 'Index', params: {}
        }
      });
      resolve();
    }, timeoutMs);
  })
};

export default navigationUtils;
