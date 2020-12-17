import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
import CustomHeader from '../../components/header';
import firestore from '@react-native-firebase/firestore';

const Room = ({route}) => {
  const [messages, setMessages] = useState([]);
  const [channel, setChannel] = useState('');
  const user = useSelector(({auth}) => auth.user);
  const {otherUser} = route.params;

  const myFirebaseCallback = useCallback(() => {
    let unsubscribeListener;
    firestore()
      .collection('channels')
      .where('users', 'array-contains', user.uid, otherUser.id)
      .get()
      .then((response) => {
        if (
          response &&
          response._docs &&
          response._docs[0] &&
          response._docs[0].id
        ) {
          setChannel(
            response &&
              response._docs &&
              response._docs[0] &&
              response._docs[0].id,
          );
          unsubscribeListener = firestore()
            .collection('channels')
            .where('channel', '==', channel)
            .orderBy('createdAt', 'desc')
            .onSnapshot((querySnapshot) => {
              if (querySnapshot) {
                const myMessages =
                  querySnapshot &&
                  querySnapshot.docs.map((doc) => {
                    const data = {
                      _id: doc.id,
                      text:
                        doc._data && doc._data.message ? doc._data.message : '',
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
        }
      });

    return () => unsubscribeListener();
  }, [otherUser.id, user.uid, channel]);

  useEffect(() => {
    myFirebaseCallback();
  }, [myFirebaseCallback]);

  const onSend = useCallback(
    (newMessages = []) => {
      firestore()
        .collection('threads')
        .add({
          createdAt: new Date(),
          message: newMessages[0].text,
          channel,
        })
        .then(() => {
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages),
          );
        });
    },
    [channel],
  );

  return (
    <>
      <CustomHeader showBack title={otherUser.name} />
      <GiftedChat
        messages={messages}
        onSend={(sentMessage) => onSend(sentMessage)}
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
