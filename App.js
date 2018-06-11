import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

import Restaurants from './App/components/Restaurants/Restaurants';
import Restaurant from './App/components/Restaurant/Restaurant';

const httpLink = new HttpLink({ uri: 'https://food.act.today/graphql' });

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

const AppNavigator = createStackNavigator(
  {
    Restaurants,
    Restaurant
  },
  {
    initialRouteName: 'Restaurants'
  }
);

const App = () => (
  <ApolloProvider client={client}>
    <AppNavigator />
  </ApolloProvider>
);

export default App;
