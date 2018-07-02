import React from 'react';
import { Header as RNEHeader, Icon } from 'react-native-elements';

const Header = ({ navigation }) => (
  <RNEHeader
    statusBarProps={{backgroundColor: '#067', barStyle: 'light-content'}}
    backgroundColor="#067"
    outerContainerStyles={{height: 50, borderBottomWidth: 0}}
    centerComponent={{ text: 'Tobiko', style: { color: '#fff', fontSize: 20 } }}
    rightComponent={<Icon name="my-location" color="#fff" underlayColor="transparent" onPress={() => navigation.navigate('Location')} />}
  />
);

export default Header;