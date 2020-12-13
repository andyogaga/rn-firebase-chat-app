import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashContainer from '../screens/splash/splash.container';
import LoginContainer from '../screens/login/login';
import Onboarding from '../screens/onboarding/onboarding.component';

const Stack = createStackNavigator();

function PublicNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Splash">
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Splash" component={SplashContainer} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
}

export default PublicNavigator;
