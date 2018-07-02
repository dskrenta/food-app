import React from 'react';
import {
  View,
  Dimensions,
  Platform,
  Animated,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import CarouselPager from 'react-native-carousel-pager';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import withContext from '../Context/withContext';
import Header from '../Header/Header';
import RestaurantCard from './RestaurantCard';
import Filters from './Filters';
import { getCurrentUTCOffset } from '../../utils/time';

const { height, width } = Dimensions.get('window');
const cardHeight = height - (Platform.OS === 'ios' ? 130 : 130);

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
    const { 
      navigation,
      context: {
        location: {
          lat,
          lon
        },
        closer,
        better
      }
    } = this.props;

    const offset = this.Animation.interpolate({
      inputRange: [0,1],
      outputRange: [height - 100, 50]
    });

    return (
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
            if (loading) {
              return (
                <View style={{ width: '100%', height: cardHeight, paddingVertical: 10 }}>
                  <ActivityIndicator size="large" style={{ padding: 30 }} />
                </View>
              );
            }
            console.log(data);

            return (
              <View style={{width: '100%', height: cardHeight, paddingVertical: 10}}>
                <CarouselPager ref={(ref) => {this.carousel = ref}} pageSpacing={5}>
                  {'search_restaurants' in data && data.search_restaurants.results.map((item, index) => (
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
            );
          }}
        </Query>
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
  }
}

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
        status
        error
        error_code
      }
      total_results
      results {
        id
        image
        description
        distance
        title
        lat
        lon
        images
        rating
        street_address
        references {
          site_name
        }
      }
    }
  }
`;

Restaurants.navigationOptions = {
  header: Header
};

export default withContext(Restaurants);
