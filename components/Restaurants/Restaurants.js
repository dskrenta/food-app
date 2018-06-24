import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

import Header from '../Header/Header';

const Restaurants = () => (
  <View>
    <Text>Restaurants</Text>
    <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={0}
      buttons={['Better', 'Closer']}
      containerStyle={{height: 25}}
    />
  </View>
);

Restaurants.navigationOptions = {
  header: Header
};

export default Restaurants;