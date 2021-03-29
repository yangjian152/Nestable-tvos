import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './Navigation';
import AppProvider from './AppProvider';
import Style from './styles/Style';
import Content from './navigations';
import client from '../configure';
import {authUtils, navigationUtils} from './utils';
import {auth as authActions} from './redux/actions';
import store from './redux';
import {navigate} from './Navigation';

// Enable screens
import {enableScreens} from 'react-native-screens';
enableScreens();

const App = () => {
  useEffect(() => {
    checkAuthentication();
  }, []);

  async function checkAuthentication() {
    let currentUser = null;
    try {
      currentUser = await authUtils.authCurrentUser();
      if (currentUser) {
        navigate('home');
      } else {
        navigate('login');
      }
    } catch (e) {
      navigate('login');
    }
  }
  return (
    <AppProvider client={client}>
      <NavigationContainer ref={navigationRef}>
        <View style={styles.app}>
          {/* <Menu /> */}
          <Content />
        </View>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    width: Style.px(1920),
    height: Style.px(1080),
    flex: 1,
    flexDirection: 'row',
  },
});
