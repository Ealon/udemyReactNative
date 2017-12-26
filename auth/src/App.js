import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDlvhYT8ibmBgZcUS7HmE1qGx6-mSX66PQ',
      authDomain: 'react-native-auth-8865.firebaseapp.com',
      databaseURL: 'https://react-native-auth-8865.firebaseio.com',
      projectId: 'react-native-auth-8865',
      storageBucket: 'react-native-auth-8865.appspot.com',
      messagingSenderId: '781300172993',
    });
    
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });        
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"/>;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
