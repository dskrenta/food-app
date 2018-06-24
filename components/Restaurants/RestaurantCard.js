import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantCard = ({ item }) => (
  <View style={styles.card}>
    <Text>{item.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 5,
    elevation: 1,
    margin: 5
  }
});

export default RestaurantCard;
