import React from 'react';
import { 
  View, 
  Text, 
  Dimensions, 
  Platform, 
  Animated, 
  TextInput, 
  ScrollView,
  TouchableHighlight
} from 'react-native';
import CarouselPager from 'react-native-carousel-pager';
import { Button, SearchBar } from 'react-native-elements'

import Header from '../Header/Header';
import RestaurantCard from './RestaurantCard';
import Filters from './Filters';

const sampleData = [
  {
    image: 'http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg',
    title: 'San Shi Go',
    address: '205 Main St, Newport Beach',
    distance: 2.1,
    rating: 4.7,
    references: [{siteName: 'Zagat'}],
    description: 'San Shi Go, Casual Elegant Seafood cuisine..'
  },
  {
    image: 'http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg',
    title: 'San Shi Go',
    address: '205 Main St, Newport Beach',
    distance: 2.1,
    rating: 5,
    references: [{siteName: 'Zagat'}, {siteName: 'Discover LA'}, {siteName: 'Thrillist'}],
    description: 'Creative rolls (chef\'s choice) style in a casual, relaxed environment.'
  },
  {
    image: 'http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg',
    title: 'San Shi Go',
    address: '205 Main St, Newport Beach',
    distance: 2.1,
    rating: 5,
    references: [{siteName: 'Zagat'}, {siteName: 'Discover LA'},],
    // description: 'Best sushi in Newport Beach with chirashis loaded with a great selection of fish'
  },
  {
    image: 'http://www.thedanimaleats.com/wp-content/uploads/2016/02/%C3%86-TDE-San-Shi-Go-1-768x512.jpg',
    title: 'San Shi Go',
    address: '205 Main St, Newport Beach',
    distance: 2.1,
    rating: 5,
    // description: 'Best sushi in Newport Beach with chirashis loaded with a great selection of fish'
  }
]

const { height, width } = Dimensions.get('window');
const cardHeight = height - (Platform.OS === 'ios' ? 150 : 130);

class Restaurants extends React.Component {
  state = {
    drawerOpen: true,
    searchValue: null,
    focused: false
  }
  
  constructor(props) {
    super(props);
    this.Animation = new Animated.Value(0);
  }

  toggleDrawer = () => {
    if (this.state.drawerOpen === false) {
      this.setState({drawerOpen: true});
      Animated.timing(
        this.Animation,
        {
          toValue: 0,
          duration: 500
        }
      ).start();
    }
    else {
      this.setState({drawerOpen: false});
      Animated.timing(
        this.Animation,
        {
          toValue: 1,
          duration: 500
        }
      ).start();
    }
  }

  render() {
    const { navigation } = this.props;
    const offset = this.Animation.interpolate({
      inputRange: [0,1],
      outputRange: [height - 100, 50]
    });

    return (
      <View>
        <View style={{width: '100%', height: cardHeight, paddingVertical: 10}}>
          <CarouselPager ref={(ref) => {this.carousel = ref}} pageSpacing={5}>
            {sampleData.map((item, index) => (
              <TouchableHighlight 
                key={index} 
                underlayColor="rgba(0,0,0,0)" 
                onPress={() => {navigation.navigate('Restaurant')}}
                style={{flex: 1}}
              >
                <RestaurantCard item={item} key={index} height={cardHeight} />
              </TouchableHighlight>
            ))}
          </CarouselPager>
        </View>
        <Animated.View style={[styles.drawer, {transform: [{translateY: offset}]}]}>
          <Filters toggleDrawer={this.toggleDrawer} drawerOpen={this.state.drawerOpen} />
        </Animated.View>
      </View>
    );
  }
}

const styles = {
  drawer: {
    position: 'absolute',
    bottom: 0,
    height: height - 90,
    width: '100%',
    backgroundColor: '#e9e9ef'
  },
  topButtons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 60,
    width: '100%'
  },
  filterButton: {
    flex: 1,
    height: 45,
    borderRadius: 5,
  },
  closerButton: {
    flex: 1, 
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#097'
  },
  betterButton: {
    flex: 1, 
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#06a'
  },
  searchContain: {
    height: 65,
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 30,
    flexGrow: 0
  },
  searchBox: {
    // backgroundColor: '#e9e9ef', 
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    margin: 5,
    height: 50,
  },
  bottomButtons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 20,
    flex: 1
  },
  buttonContain: {
    flexGrow: 1,
    flexBasis: '50%'
  },
  buttonContainer: {
    flexGrow: 1,
    flexBasis: '33%'
  },
  mainButton: {
    // height: 60,
    borderWidth: 1,
    marginHorizontal: 0,
    marginVertical: 15,
    borderRadius: 5
  },
  clearContain: {
    height: 60,
    width: '100%',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  clearButton: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: '#067',
    backgroundColor: '#067'
  }
}
// Data code
/*
import { View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Header from '../Header/Header';
import withContext from '../Context/withContext';

const Restaurants = ({
  context: {
    location: {
      lat,
      lon
    },
    closer, 
    better
  }
}) => (
  <View>
    <Query 
      query={SEARCH_RESTAURANTS_QUERY} 
      variables={{ 
        lat,
        lon,
        date: null,
        time: null,
        tz_offset: getCurrentUTCOffset(),
        closer,
        better
      }}
    >
      {({ loading, error, data = {} }) => {
        if (loading) return <Text>Loading...</Text>;

        return (
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
      }}
    </Query>
  </View>
);

const SEARCH_RESTAURANTS_QUERY = gql`
  query search_restaurants(
    $lat: String,
    $lon: String,
    $date: String,
    $time: String,
    $tz_offset: Int,
    $closer: Int,
    $better: Int
  ) {
    search_restaurants(
      lat: $lat,
      lon: $lon, 
      date: $date,
      time: $time, 
      tz_offset: $tz_offset, 
      closer: $closer,
      better: $better
    ) {
      response_status {
        stats 
        error
        error_code
      }
      total_results
      results {
        id
        description 
        distance
        title
        lat
        lon
        images
      }
    }
  }
`;

Restaurants.navigationOptions = {
  header: Header
};

export default withContext(Restaurants);
*/

Restaurants.navigationOptions = {
  header: Header
};

export default Restaurants;