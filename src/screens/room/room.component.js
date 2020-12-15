import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
import CustomHeader from '../../components/header';
import firestore from '@react-native-firebase/firestore';

const Room = ({route}) => {
  const [messages, setMessages] = useState([]);
  const user = useSelector(({auth}) => auth.user);
  const {otherUser} = route.params;

  useEffect(() => {
    const unsubscribeListener = firestore()
      .collection('threads')
      .where('sender', '==', user.uid)
      .where('receiver', '==', otherUser.id)
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        if (querySnapshot) {
          const myMessages =
            querySnapshot &&
            querySnapshot.docs.map((doc) => {
              const data = {
                _id: doc.id,
                text: doc._data && doc._data.message ? doc._data.message : '',
                createdAt: new Date().getTime(),
              };
              data.user = {
                _id: doc._data && doc._data.sender,
                avatar: 'https://placeimg.com/140/140/any',
              };
              return data;
            });
          setMessages(myMessages);
        }
      });

    return () => unsubscribeListener();
  }, [user.uid]);

  const onSend = useCallback((newMessages = []) => {
    console.log(newMessages);
    firestore()
      .collection('threads')
      .add({
        createdAt: new Date(),
        message: newMessages[0].text,
        receiver: otherUser.id,
        sender: user.uid,
      })
      .then(() => {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, newMessages),
        );
      });
  }, []);

  return (
    <>
      <CustomHeader showBack title={otherUser.name} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: user.uid,
          name: user.displayName,
          avatar: 'https://placeimg.com/140/140/any',
        }}
      />
    </>
  );
};

export default Room;
