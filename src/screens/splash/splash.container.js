/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {withTheme} from 'react-native-elements';
import Splash from './splash';
import {func, bool} from 'prop-types';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const SplashContainer = (props) => {
  const navigation = useNavigation();
  const {isAuthenticated, firstAccess} = props;
  useEffect(() => {
    setTimeout(() => {
      if (isAuthenticated) {
        navigation.navigate('Home');
      } else {
        if (firstAccess) {
          navigation.navigate('Onboarding');
        } else {
          navigation.navigate('Login');
        }
      }
    }, 2000);
    return () => {
      clearTimeout();
    };
  }, [isAuthenticated, firstAccess]);

  return <Splash />;
};

const mapState = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated,
  firstAccess: auth.firstAccess,
});

SplashContainer.propTypes = {
  isAuthenticated: bool,
  updateTheme: func,
};

export default connect(mapState)(withTheme(SplashContainer));
