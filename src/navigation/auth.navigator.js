import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import PrivateNavigator from './PrivateNavigator';
import PublicNavigator from './PublicNavigator';
import {bool} from 'prop-types';

function RootApp({isAuthenticated}) {
  return (
    <NavigationContainer>
      {isAuthenticated ? <PrivateNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
}

const mapState = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated,
});

RootApp.propTypes = {
  isAuthenticated: bool,
};

export default connect(mapState)(RootApp);
