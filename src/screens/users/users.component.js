import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getUsers} from '../../store/actions/user.actions';
import Accordion from '../../components/Accordion';
import CustomHeader from '../../components/header';

const Users = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const users = useSelector(({users}) => users.users);
  useFocusEffect(
    useCallback(() => {
      dispatch(getUsers());
    }, [dispatch]),
  );

  const enterRoom = (user) => {
    navigation.navigate('Room', {
      otherUser: user,
    });
  };

  return (
    <>
      <CustomHeader title="Users" />
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        {users.map((user) => {
          return (
            <Accordion
              key={user.name}
              title={user.name}
              onPress={() => enterRoom(user)}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default Users;
