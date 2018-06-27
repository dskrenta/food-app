import React from 'react';
import { Text } from 'react-native';

const sampleRestaurant = {
  image: 'http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg',
  title: 'San Shi Go',
  address: '205 Main St, Newport Beach',
  distance: 2.1,
  rating: 4.7,
  references: [{siteName: 'Zagat'}],
  description: 'Creative rolls & sushi served omakase (chef\'s choice) style in a casual, relaxed environment.',
  /*hours: String
  hours_source: String*/
  images: ['http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg','http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg','http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg']
  /*lat: Float
  lon: Float
  opentable_url: String
  opentable_id: String
  open_closed: String
  phone: String*/
};

const Restaurant = ({ navigation }) => (
  <Text>Restaurant</Text>
);

Restaurant.navigationOptions = {
  headerTitle: 'Details'
}

export default Restaurant;