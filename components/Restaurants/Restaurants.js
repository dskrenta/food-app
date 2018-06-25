import React from 'react';
import { View, Text, Button, Dimensions, Platform, Animated } from 'react-native';
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
    references: [{siteName: 'Zagat'}],
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

class Restaurants extends React.Component {
  constructor(props) {
    super(props);

    this.Animation = new Animated.Value(0);
    this.drawerOpen = true;
  }

  toggleDrawer = () => {
    if (this.drawerOpen === false) {
      Animated.timing(
        this.Animation,
        {
          toValue: 0,
          duration: 500
        }
      ).start(() => {
        this.drawerOpen = true;
      });
    }
    else {
      Animated.timing(
        this.Animation,
        {
          toValue: 1,
          duration: 500
        }
      ).start(() => {
        this.drawerOpen = false;
      });
    }
  }

  render() {
    const interpolation = this.Animation.interpolate({
      inputRange: [0,1],
      outputRange: [height - 70, 60]
    });

    return (
      <View>
        <View style={{width: '100%', height: cardHeight, paddingVertical: 10}}>
          <CarouselPager ref={ref => this.carousel = ref} pageSpacing={5}>
            {sampleData.map((item, index) => (
              <RestaurantCard item={item} key={index} height={cardHeight} />
            ))}
          </CarouselPager>
        </View>
        <Animated.View style={[styles.drawer, {transform: [{translateY: interpolation}]}]}>
          <Button title="Filter" onPress={this.toggleDrawer} />
          <Text>Drawer Content</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = {
  drawer: {
    position: 'absolute',
    bottom: 0,
    height: height - 70,
    width: '100%',
    backgroundColor: 'blue'
  }
}

Restaurants.navigationOptions = {
  header: Header
};

export default Restaurants;