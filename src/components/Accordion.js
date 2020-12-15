/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import CustomText from './CustomText';
import {Icon, withTheme} from 'react-native-elements';
import {string, func, bool, shape, node} from 'prop-types';

const Accordion = ({
  active = false,
  title,
  onPress = () => {},
  loading,
  theme,
  focused = false,
}) => (
  <View
    style={{
      width: '100%',
      height: 60,
      backgroundColor: focused ? '#fbf0f5' : '#fff',
      elevation: 10,
      marginVertical: 1,
    }}>
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        flexDirection: 'row',
        padding: 20,
        paddingRight: '13%',
      }}>
      <View
        style={{
          width: '10%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          type="material-community"
          color={theme.colors.primary}
          name="account"
          size={30}
        />
      </View>
      <View
        style={{
          width: '80%',
          paddingLeft: 10,
          justifyContent: 'flex-start',
        }}>
        <CustomText
          style={{
            fontWeight: 'bold',
            color: active ? theme.colors.primary : '#444444',
            fontSize: 18,
          }}>
          {title}
        </CustomText>
      </View>
      <View
        style={{
          width: '15%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {loading ? (
          <ActivityIndicator size={25} color={theme.colors.primary} />
        ) : (
          <Icon
            type="material-community"
            color={theme.colors.primary}
            name="arrow-right"
            size={20}
          />
        )}
      </View>
    </TouchableOpacity>
  </View>
);

Accordion.propTypes = {
  active: string,
  title: string,
  address: string,
  phone: string,
  onPress: func,
  loading: bool,
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
  children: node,
};

export default withTheme(Accordion);
