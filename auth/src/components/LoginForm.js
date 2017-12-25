import React, { Component } from 'react';
import {
  TextInput,
} from 'react-native';
import {
  Button,
  Card,
  CardSection,
  Input,
} from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
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
        
        <CardSection>
          <Button>log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
