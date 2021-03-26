import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './Navigation';
import AppProvider from './AppProvider';
import Style from './styles/Style';
import Content from './navigations';
import client from '../configure';

// Enable screens
import {enableScreens} from 'react-native-screens';
enableScreens();

const App = () => {
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
