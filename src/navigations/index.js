import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Style from '../styles/Style';
import {AppContext} from '../AppProvider';
import {navigate} from '../Navigation';
import HomeScreen from '../screens/main/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

const Content = () => {
  const [appContext, setAppContext] = useContext(AppContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('login');
    }
  }, []);

  return (
    <View
      style={[
        styles.navigator,
        !appContext.menuVisible && styles.navigatorFullscreen,
      ]}>
      <Stack.Navigator
        initialRouteName="home"
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
          unmountInactiveScreen: true,
          detachPreviousScreen: true,
        }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  app: {
    width: Style.px(1920),
    height: Style.px(1080),
    flex: 1,
    flexDirection: 'row',
  },
  navigator: {
    width: Style.px(1920),
    height: Style.px(1080),
  },
  navigatorFullscreen: {
    width: Style.px(1920),
  },
});
