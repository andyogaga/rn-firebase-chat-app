/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
import {withTheme} from 'react-native-elements';
import {shape, string} from 'prop-types';
import Logo from '../../assets/icons/chat.png';
import CustomText from '../../components/CustomText';

const Splash = ({theme}) => {
  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Image
          source={Logo}
          style={{
            alignSelf: 'center',
            width: 156,
            height: 156,
          }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: SCREEN_HEIGHT * 0.1,
        }}>
        <ActivityIndicator size={40} color="#fff" />
        <CustomText style={{color: '#fff', marginTop: SCREEN_HEIGHT * 0.1}}>
          By <CustomText style={{fontWeight: 'bold'}}>Andy Ogaga</CustomText>
        </CustomText>
      </View>
    </View>
  );
};

Splash.propTypes = {
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
};

export default withTheme(Splash);
