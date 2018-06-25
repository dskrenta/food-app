import React from 'react';
import { View, Text, Dimensions, Platform } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import CarouselPager from 'react-native-carousel-pager';

import Header from '../Header/Header';
import RestaurantCard from './RestaurantCard';

const sampleData = [
  {
    image: 'http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg',
    title: 'San Shi Go',
    address: '205 Main St, Newport Beach',
    distance: 2.1,
    rating: 4.7,
    references: [{siteName: 'Zagat'}],
    description: 'Creative rolls & sushi served omakase (chef\'s choice) style in a casual, relaxed environment.'
  },
  {
    image: 'http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg',
    title: 'San Shi Go',
    address: '205 Main St, Newport Beach',
    distance: 2.1,
    rating: 5,
    // description: 'Creative rolls & sushi served omakase (chef\'s choice) style in a casual, relaxed environment.'
  },
  {
    image: 'http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg',
    title: 'San Shi Go',
    address: '205 Main St, Newport Beach, CA 92661',
    distance: 2.1,
    rating: 5,
    description: 'Best sushi in Newport Beach with chirashis loaded with a great selection of fish'
  },
  {
    image: 'http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg',
    title: 'San Shi Go',
    address: '205 Main St, Newport Beach, CA 92661',
    distance: 2.1,
    rating: 5,
    description: 'Best sushi in Newport Beach with chirashis loaded with a great selection of fish'
  },

]

const { height, width } = Dimensions.get('window');
const cardHeight = height - (Platform.OS === 'ios' ? 150 : 130);

const Restaurants = () => (
  <View>
    <View style={{width: '100%', height: cardHeight, paddingVertical: 10}}>
      <CarouselPager ref={ref => this.carousel = ref} pageSpacing={5}>
        {sampleData.map((item, index) => (
          <RestaurantCard item={item} key={index} height={cardHeight} />
        ))}
      </CarouselPager>
    </View>
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