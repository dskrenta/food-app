import React from 'react';
import { 
  Text, 
  View 
} from 'react-native';
import { Header, Card, Button, Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper-animated';

/*
const Restaurants = () => (
  <Text>Restaurants</Text>
);
*/

const Restaurants = () => (
  <Swiper
    style={styles.wrapper}
    smoothTransition
    loop
  >
    <View style={styles.slide1}>
      <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
    <View>
      <Card
        title='HELLO WORLD'
      >
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
    </View>
  </Swiper>
);

Restaurants.navigationOptions = {
  header: (
    <Header
      centerComponent={{ text: 'Tobiko', style: { color: '#fff', 'fontSize': 18 } }}
      rightComponent={{ icon: 'my-location', color: '#fff' }}
    />
  )
};

const styles = {
  wrapper: {
    backgroundColor: '#009688',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e91e63',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#673ab7',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f51b5',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default Restaurants;