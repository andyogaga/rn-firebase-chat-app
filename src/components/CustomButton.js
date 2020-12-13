import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {withTheme} from 'react-native-elements';
import {shape, string, bool, number, func, node} from 'prop-types';
import CustomText from './CustomText';

const CustomButton = ({
  theme,
  primary,
  secondary,
  white,
  height,
  width,
  onPress = () => {},
  padding = 7,
  fontSize = 18,
  children,
  disabled = false,
  loading = false,
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: disabled
          ? theme.colors.faded
          : primary
          ? theme.colors.primary
          : secondary
          ? theme.colors.secondary
          : white
          ? 'white'
          : theme.colors.primary,
        padding,
        width: width ? width : '60%',
        height: height ? height : 40,
        borderRadius: height ? height / 2 : 20,
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator
          size={20}
          color={primary || secondary ? 'white' : theme.colors.primary}
          style={{alignSelf: 'center'}}
        />
      ) : (
        <CustomText
          style={{
            color: primary || secondary ? 'white' : theme.colors.primary,
            alignSelf: 'center',
            fontSize,
            fontWeight: 'bold',
            ...textStyle,
          }}>
          {children}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
  primary: bool,
  secondary: bool,
  white: bool,
  height: number,
  width: string,
  onPress: func,
  children: node,
  disabled: bool,
  loading: bool,
  style: shape({}),
  padding: number,
  fontSize: number,
  textStyle: shape({}),
};

export default withTheme(CustomButton);
