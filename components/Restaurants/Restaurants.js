import React from 'react';
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