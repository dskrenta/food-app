import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';

import Restaurants from '../Restaurants/Restaurants';
import Restaurant from '../Restaurant/Restaurant';
import Location from '../Location/Location';
import { AppProvider } from '../Context/AppProvider';
import { GRAPHQL_API_URL } from '../../utils/constants';

const httpLink = new HttpLink({ uri: GRAPHQL_API_URL });

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = ApolloLink.from([
  errorLink,
  httpLink
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const AppStackNavigator = createStackNavigator(
  {
    Restaurants,
    Restaurant,
    Location
  },
  {
    initialRouteName: 'Restaurants',
    navigationOptions: {
      headerStyle: { backgroundColor: '#067', height: 50, elevation: 0, paddingBottom: 5 },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'normal', textAlign: 'center', alignSelf: 'center', flex: 1, fontSize: 20 },
      headerRight: (<View></View>)
    }
  }
);

const App = () => (
  <ApolloProvider client={client}>
    <AppProvider>
      <AppStackNavigator />
    </AppProvider>
  </ApolloProvider>
);

export default App;
