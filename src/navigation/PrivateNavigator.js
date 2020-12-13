/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function PrivateNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="AboutScreen">
      {/* <Stack.Screen name="AboutScreen" component={About} />
      <Stack.Screen name="Terms" component={Terms} /> */}
    </Stack.Navigator>
  );
}

export default PrivateNavigator;
