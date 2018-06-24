import React from 'react';
import { Header as RNEHeader, Icon } from 'react-native-elements';

const Header = ({ navigation }) => (
  <RNEHeader
    centerComponent={{ text: 'Tobiko', style: { color: '#fff', 'fontSize': 18 } }}
    rightComponent={<Icon name="my-location" onPress={() => navigation.navigate('Location')} />}
  />
);

export default Header;