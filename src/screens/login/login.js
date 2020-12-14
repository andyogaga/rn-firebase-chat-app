import React, {useEffect, useCallback} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {withTheme} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import {shape, func, string} from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, PRI_COLOR} from '../../utils/constants';
import Logo from '../../assets/icons/chat.png';
import CustomInput from '../../components/CustomInput';
import {signInAnonymously} from '../../store/actions/auth.actions';

const Login = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {theme} = props;

  const myCallback = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }, []);

  useEffect(() => {
    myCallback;
  }, [myCallback]);

  const login = ({user}, {setSubmitting, setFieldError}) => {
    dispatch(
      signInAnonymously(user, () => {
        setSubmitting(false);
      }),
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    loginContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: SCREEN_HEIGHT,
    },
    titleContainer: {
      alignSelf: 'center',
      height: 150,
      width: 150,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      borderRadius: 75,
      borderColor: PRI_COLOR,
      borderWidth: 0.5,
      alignItems: 'center',
      marginBottom: SCREEN_HEIGHT * 0.17,
      padding: 25,
    },
    formContainer: {
      width: SCREEN_WIDTH - 60,
      borderRadius: 30,
      paddingBottom: 16,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    helpContainer: {
      width: '100%',
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView
        style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <View style={styles.titleContainer}>
          <Image
            source={Logo}
            style={{
              alignSelf: 'center',
              height: '100%',
              width: '100%',
            }}
            resizeMode="contain"
          />
        </View>
        <KeyboardAvoidingView>
          <Formik
            onSubmit={login}
            initialValues={{user: ''}}
            validationSchema={Yup.object().shape({
              user: Yup.string().required('Required!'),
            })}>
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleBlur,
              setFieldValue,
              isSubmitting,
            }) => {
              return (
                <View style={styles.formContainer}>
                  <CustomInput
                    value={values.user}
                    theme={theme}
                    setFieldValue={setFieldValue}
                    handleBlur={handleBlur}
                    name="user"
                    errors={errors}
                    touched={touched}
                    placeholder="mikistar"
                    label="Username:"
                  />

                  <CustomButton
                    primary
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    style={{
                      marginTop: 15,
                      height: 50,
                      width: '100%',
                      borderRadius: 25,
                      justifyContent: 'center',
                    }}
                    onPress={handleSubmit}>
                    Submit
                  </CustomButton>
                </View>
              );
            }}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

Login.propTypes = {
  navigation: shape({
    navigate: func,
  }),
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
  sendLoginRequest: func,
};

export default withTheme(Login);
