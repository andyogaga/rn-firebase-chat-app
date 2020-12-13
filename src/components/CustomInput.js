import React, {useState} from 'react';
import {Input, withTheme, Icon} from 'react-native-elements';
import CustomText from './CustomText';
import {View, TouchableOpacity} from 'react-native';
import {string, bool, shape, func} from 'prop-types';

const CustomInput = ({
  value,
  autoCorrect = true,
  secureTextEntry = false,
  blurOnSubmit = false,
  theme,
  placeholder = '',
  setFieldValue,
  handleBlur,
  name,
  errors,
  touched,
  multiline = false,
  bordered = false,
  label,
  inputStyle = {},
}) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <View style={{marginVertical: 10, width: '100%'}}>
      {label && (
        <CustomText style={{textAlign: 'left', color: theme.colors.primary}}>
          {label}
        </CustomText>
      )}

      <Input
        value={value}
        keyboardAppearance="light"
        autoCapitalize="none"
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry && !visibility ? true : false}
        blurOnSubmit={blurOnSubmit}
        multiline={multiline}
        rightIcon={
          name === 'password' && (
            <TouchableOpacity
              onPress={() => setVisibility((prev) => !prev)}
              style={{padding: 20, marginRight: -20}}>
              <Icon
                type={visibility ? 'material-community' : 'material'}
                color={theme.colors.secondary}
                name={visibility ? 'eye-off' : 'visibility'}
              />
            </TouchableOpacity>
          )
        }
        inputContainerStyle={
          Object.keys(inputStyle).length === 0 && {
            borderBottomWidth: 0,

            ...(multiline
              ? {
                  minHeight: 200,
                }
              : {
                  height: 30,
                }),
          }
        }
        containerStyle={
          Object.keys(inputStyle).length === 0
            ? {
                borderBottomWidth: 1.5,
                paddingLeft: 0,
                ...(multiline
                  ? {
                      minHeight: 200,
                      paddingLeft: 10,
                    }
                  : {
                      height: 30,
                    }),
                borderColor: theme.colors.primary,

                ...(bordered && {
                  borderWidth: 1,
                }),
              }
            : null
        }
        inputStyle={{
          textAlign: 'justify',
          fontSize: 16,
          paddingBottom: 10,
          paddingLeft: 0,
          ...inputStyle,
        }}
        placeholder={placeholder}
        onChangeText={(val) => setFieldValue(name, val)}
        onBlur={handleBlur(name)}
        errorMessage={errors[name] && touched[name] ? errors[name] : null}
      />
    </View>
  );
};

CustomInput.propTypes = {
  value: string,
  autoCorrect: bool,
  secureTextEntry: bool,
  blurOnSubmit: bool,
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
  placeholder: string,
  setFieldValue: func,
  handleBlur: func,
  name: string,
  errors: shape({}),
  touched: shape({}),
  label: string,
  multiline: bool,
  bordered: bool,
  inputStyle: shape({}),
};

export default withTheme(CustomInput);
