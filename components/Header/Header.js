import React from 'react';
import { Header as RNEHeader } from 'react-native-elements';

const Header = () => (
  <RNEHeader
    centerComponent={{ text: 'Tobiko', style: { color: '#fff', 'fontSize': 18 } }}
    rightComponent={{ icon: 'my-location', color: '#fff' }}
  />
);

export default Header;