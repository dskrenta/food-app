import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const Button = (onPress, title, textStyle, style) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.contain, style]}
  >
    <Text style={[styles.title, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  contain: {
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    color: '#067',
  }
});

export default Button;