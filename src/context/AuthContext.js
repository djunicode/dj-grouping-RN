import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import React, {useState, useEffect, useContext} from 'react';

const [data, setdata] = useState([]);
const STORAGE_KEY = '@user_input';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
    case 'signup':
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    console.log(email);
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg',
    );
    var formdata = new FormData();
    formdata.append('email ', email);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'http://omshukla.pythonanywhere.com/accounts/register/',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
};

const signin = dispatch => {
  const saveData = async token => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (err) {
      console.log(err);
    }
  };

  return ({email, password}) => {
    var token;
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg',
    );
    var formdata = new FormData();
    formdata.append('email ', email);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('http://omshukla.pythonanywhere.com/accounts/login/', requestOptions)
      //   .then(response => response.text())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));

      .then(response => response.json())
      .then(json => {
        console.log(json);
        setdata(json);
        let v = json.user_id.toString();
        token = json.token;
        console.log(json.token);
        saveData(token);
        console.log(typeof v);
        console.log(v);
        AsyncStorage.setItem(STORAGE_KEY, v);
      })
      .catch(error => console.error(error));
    dispatch({
      type: 'signin',
      payload: {
        token: token,
        email,
      },
    });
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup},
  {token: '', email: ''},
);
