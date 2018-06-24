import { AppRegistry } from 'react-native';

import App from './components/App/App';

// Dislable YellowBox warnings
console.disableYellowBox = true;

AppRegistry.registerComponent(
  'Tobiko', 
  () => App
);
