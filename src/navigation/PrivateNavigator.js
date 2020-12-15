/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Users from '../screens/users/users.component';
import Room from '../screens/room/room.component';

const Stack = createStackNavigator();

function PrivateNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Users">
      <Stack.Screen name="Room" component={Room} />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
}

export default PrivateNavigator;
