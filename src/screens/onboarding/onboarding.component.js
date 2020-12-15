/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {withTheme, Icon} from 'react-native-elements';
import CustomText from '../../components/CustomText';
import {useDispatch} from 'react-redux';
import {changeFromFirstTimer} from '../../store/actions/auth.actions';
import FirstImage from '../../assets/icons/chat.png';
import SecondImage from '../../assets/icons/chat.png';
import ThirdImage from '../../assets/icons/chat.png';
import {SCREEN_WIDTH, SCREEN_HEIGHT, TEXT_COLOR} from '../../utils/constants';
import {Row, Col} from 'react-native-easy-grid';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {shape, string} from 'prop-types';

const onboardInfo = {
  0: {
    title: 'View Chat Users',
    body: 'Select a user from the list of registered users',
    image: FirstImage,
  },
  1: {
    title: 'Chat with User',
    body: 'Chat with selected user',
    image: SecondImage,
  },
  2: {
    title: 'Get Notifications',
    body: 'Get notified of new messages',
    image: ThirdImage,
  },
};

const Onboarding = ({theme: {colors}}) => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const switchContent = (direction) => {
    if (typeof direction === 'string') {
      if (direction === 'back') {
        if (active === 0) {
          return;
        }
        setActive((prev) => prev - 1);
      }
      if (direction === 'front') {
        if (active === Object.keys(onboardInfo).length) {
          return;
        }
        setActive((prev) => prev + 1);
      }
    } else {
      setActive(direction);
    }
  };

  useEffect(() => {
    return () => dispatch(changeFromFirstTimer());
  }, []);

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          padding: 30,
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1,
        }}>
        <Row
          style={{
            height: SCREEN_WIDTH * 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Col size={15}>
            {active !== 0 && (
              <TouchableOpacity
                onPress={() => switchContent('back')}
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="arrow-left-circle"
                  color={colors.secondary}
                  type="material-community"
                  size={25}
                />
              </TouchableOpacity>
            )}
          </Col>
          <Col
            size={70}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={onboardInfo[active].image}
              style={{
                width: SCREEN_WIDTH * 0.4,
                height: SCREEN_WIDTH * 0.4,
                justifyContent: 'center',
              }}
              resizeMode="contain"
            />
          </Col>
          <Col size={15}>
            {active !== Object.keys(onboardInfo).length - 1 && (
              <TouchableOpacity
                onPress={() => switchContent('front')}
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="arrow-right-circle"
                  color={colors.secondary}
                  type="material-community"
                  size={25}
                />
              </TouchableOpacity>
            )}
          </Col>
        </Row>
        <View>
          <CustomText
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              textAlign: 'center',
              color: TEXT_COLOR,
            }}>
            {onboardInfo[active].title}
          </CustomText>
          <CustomText
            style={{
              fontSize: 16,
              textAlign: 'center',
              color: TEXT_COLOR,
              padding: 20,
            }}>
            {onboardInfo[active].body}
          </CustomText>
        </View>
        <View
          style={{flexDirection: 'row', justifyContent: 'center', padding: 20}}>
          {Object.keys(onboardInfo).map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => switchContent(index)}>
                <View
                  style={{
                    backgroundColor:
                      index === active ? colors.secondary : colors.primary,
                    height: 26,
                    width: 26,
                    borderRadius: 13,
                    borderColor: '#fff',
                    borderWidth: index === active ? 1 : 0,
                    marginHorizontal: 5,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <CustomButton
          primary
          onPress={() => navigation.navigate('Login')}
          textStyle={{
            fontSize: 16,
            color:
              active === Object.keys(onboardInfo).length - 1
                ? colors.primary
                : TEXT_COLOR,
          }}
          style={{
            borderWidth: 0.5,
            borderColor: TEXT_COLOR,
            width: SCREEN_WIDTH * 0.6,
            height: 50,
            marginVertical: 20,
            marginBottom: SCREEN_HEIGHT * 0.12,
            backgroundColor:
              active === Object.keys(onboardInfo).length - 1
                ? '#fff'
                : 'transparent',
            justifyContent: 'center',
          }}>
          {active === Object.keys(onboardInfo).length - 1
            ? 'PROCEED'
            : 'SKIP INTRO'}
        </CustomButton>
      </View>
    </View>
  );
};

Onboarding.propTypes = {
  theme: shape({
    colors: shape({
      secondary: string,
    }),
  }),
};

export default withTheme(Onboarding);
