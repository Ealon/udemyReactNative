import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#fff',
  },
  viewStyle: {
    justifyContent: 'center',
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    height: 60,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
};

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

export {Header};
