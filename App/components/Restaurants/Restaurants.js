import React from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native-elements';

const Restaurants = () => (
  <Text>Restaurants</Text>
);

Restaurants.navigationOptions = {
  header: (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  )
};

export default Restaurants;