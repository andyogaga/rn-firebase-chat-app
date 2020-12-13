import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';
import {withTheme, Icon} from 'react-native-elements';
import {bool, string, shape} from 'prop-types';
import {SCREEN_WIDTH} from '../utils/constants';
import CustomText from './CustomText';

const CustomHeader = ({
  title,
  theme,
  transparent,
  showBack,
  networkState = '',
  screen = '',
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        height: 50,
        width: SCREEN_WIDTH,
        backgroundColor: transparent ? 'transparent' : theme.colors.primary,

        marginBottom: 0,
        zIndex: 3,
      }}>
      <Row
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {showBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignSelf: 'center',
              padding: 15,
              height: '100%',
              backgroundColor: transparent
                ? 'transparent'
                : theme.colors.primary,
            }}>
            <Icon
              type="material-community"
              color={theme.colors.secondary}
              name="arrow-left"
            />
          </TouchableOpacity>
        )}

        <Col
          style={{
            backgroundColor: transparent ? 'transparent' : theme.colors.primary,
            paddingLeft: showBack ? 0 : 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomText
              style={{fontSize: 16, color: '#fff', alignSelf: 'flex-start'}}
              numberOfLines={1}>
              {title ? title : ''}
            </CustomText>
          </TouchableOpacity>
        </Col>
      </Row>
      {screen === 'dashboard' ? (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: networkState === 'Online' ? '#1be000' : 'red',
              width: 20,
              height: 20,
              borderRadius: 10,
            }}
          />
          <CustomText
            style={{color: '#fff', marginHorizontal: 8, fontWeight: 'bold'}}>
            {networkState}
          </CustomText>
        </View>
      ) : null}
    </View>
  );
};

CustomHeader.propTypes = {
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
  title: string,
  drawer: bool,
  green: bool,
  transparent: bool,
  showBack: bool,
  networkState: string,
  screen: string,
};

export default withTheme(CustomHeader);
