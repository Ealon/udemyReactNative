import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import firebase from 'firebase';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner,
} from './common';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#f44336',
  },
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({
      error: '',
      loading: true,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  onLoginFail = () => {
    this.setState({
      error: 'Authentication Failed.',
      loading: false,
    });
  }

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return <Button onPress={this.onButtonPress}>log in</Button>
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value = {this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
          />
        </CardSection>
        
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            value = {this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="password"
          />
        </CardSection>
        
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
