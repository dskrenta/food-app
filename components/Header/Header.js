import React from 'react';
import { Header as RNEHeader, Icon } from 'react-native-elements';
import { Platform } from 'react-native';

const Header = ({ navigation }) => (
  <RNEHeader
    statusBarProps={{backgroundColor: '#067', barStyle: 'light-content'}}
    backgroundColor="#067"
    outerContainerStyles={{height: Platform.OS === 'ios' ? 70 : 50}}
    centerComponent={{ text: 'Tobiko', style: { color: '#fff', fontSize: 20 } }}
    rightComponent={<Icon name="my-location" color="#fff" onPress={() => navigation.navigate('Location')} />}
  />
);

export default Header;