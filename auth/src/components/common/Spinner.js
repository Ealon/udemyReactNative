import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Spinner = ({ size }) => {
  const { spinnerStyle } = styles;
  
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

export {Spinner};
