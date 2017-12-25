import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDlvhYT8ibmBgZcUS7HmE1qGx6-mSX66PQ',
      authDomain: 'react-native-auth-8865.firebaseapp.com',
      databaseURL: 'https://react-native-auth-8865.firebaseio.com',
      projectId: 'react-native-auth-8865',
      storageBucket: 'react-native-auth-8865.appspot.com',
      messagingSenderId: '781300172993',
    });  
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
