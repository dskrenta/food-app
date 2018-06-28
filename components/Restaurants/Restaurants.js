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

const colors = {
  closer: [
    '#e9e9ef',
    '#def',
    '#dff',
    '#cff',
    '#bff'
  ],
  better: [
    '#e9e9ef',
    '#ddf',
    '#cdf',
    '#bdf',
    '#9cf'
  ]
}

const { height, width } = Dimensions.get('window');
const cardHeight = height - (Platform.OS === 'ios' ? 150 : 130);

class Restaurants extends React.Component {
  state = {
    drawerOpen: true,
    closer: 0,
    better: 0,
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

  onChangeText = (value) => {
    this.setState({searchValue: value});
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
          <View style={styles.topButtons}>
            <Button 
              title="Closer" 
              onPress={() => {this.setState({closer: this.state.closer + 1})}}
              buttonStyle={styles.closerButton}
              containerViewStyle={{height: 45}}
              textStyle={{color: '#097'}}
              backgroundColor={colors.closer[this.state.closer]}
            />
            <Button 
              title={this.state.drawerOpen ? "Filters" : "Close"}
              onPress={this.toggleDrawer} 
              buttonStyle={styles.filterButton} 
              containerViewStyle={{height: 45}}
              textStyle={{color: '#067'}}
              backgroundColor="#e9e9ef"
            />
            <Button 
              title="Better"
              onPress={() => {this.setState({better: this.state.better + 1})}}
              buttonStyle={styles.betterButton} 
              containerViewStyle={{height: 45}}
              textStyle={{color: '#06a'}}
              backgroundColor={colors.better[this.state.better]}
            />
          </View>
          <ScrollView style={styles.searchContain} keyboardShouldPersistTaps="handled">
            {/*<SearchBar 
              // lightTheme
              platform="ios"
              placeholder="What are you looking for?"
              containerStyle={styles.searchBox}
              inputContainerStyle={{backgroundColor: 'green'}}
            />*/}
            <TextInput
              style={styles.searchBox}
              placeholder="What are you looking for?"
              value={this.state.searchValue}
              onChangeText={this.onChangeText}
              underlineColorAndroid='rgba(0,0,0,0)'
            />
          </ScrollView>
          <View style={styles.bottomButtons}>
            <View style={styles.buttonContain}>
              <Button 
                title="Veg"
                buttonStyle={styles.mainButton} 
                containerViewStyle={styles.buttonContainer}
                textStyle={{color: '#06a'}}
                backgroundColor={colors.better[this.state.better]}
              />
            </View>
            <View style={styles.buttonContain}>
              <Button 
                title="Meat"
                buttonStyle={styles.mainButton} 
                containerViewStyle={styles.buttonContainer}
                textStyle={{color: '#06a'}}
                backgroundColor={colors.better[this.state.better]}
              />
            </View>
            <View style={styles.buttonContain}>
              <Button 
                title="Wine"
                buttonStyle={styles.mainButton} 
                containerViewStyle={styles.buttonContainer}
                textStyle={{color: '#06a'}}
                backgroundColor={colors.better[this.state.better]}
              />
            </View>
            <View style={styles.buttonContain}>
              <Button 
                title="Cocktails"
                buttonStyle={styles.mainButton} 
                containerViewStyle={styles.buttonContainer}
                textStyle={{color: '#06a'}}
                backgroundColor={colors.better[this.state.better]}
              />
            </View>
            <View style={styles.buttonContain}>
              <Button 
                title="Kids"
                buttonStyle={styles.mainButton} 
                containerViewStyle={styles.buttonContainer}
                textStyle={{color: '#06a'}}
                backgroundColor={colors.better[this.state.better]}
              />
            </View>
            <View style={styles.buttonContain}>
              <Button 
                title="Cheap"
                buttonStyle={styles.mainButton} 
                containerViewStyle={styles.buttonContainer}
                textStyle={{color: '#06a'}}
                backgroundColor={colors.better[this.state.better]}
              />
            </View>
          </View>
          <View style={styles.clearContain}>
            <Button 
              title="Clear Filters"
              buttonStyle={styles.clearButton}
            />
          </View>
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
    flex: 1,
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

Restaurants.navigationOptions = {
  header: Header
};

export default Restaurants;