import React, { Component } from 'react';
import {
  // Text,
  View
} from 'react-native';
import {
  Button,
  Card,
  CardSection,
} from './common';

class LoginForm extends Component {

  render() {
    return (
      <Card>
        <CardSection></CardSection>
        <CardSection></CardSection>
        <CardSection>
          <Button>log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
