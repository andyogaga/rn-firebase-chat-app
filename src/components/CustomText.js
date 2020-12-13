import React from 'react';
import {Text} from 'react-native';
import {shape, string} from 'prop-types';

const CustomText = ({children, style, ...props}) => {
  return (
    <Text {...props} style={{fontSize: 16, ...style, fontFamily: 'Roboto'}}>
      {children}
    </Text>
  );
};

CustomText.propTypes = {
  style: shape({}),
  children: string,
};

export default CustomText;
