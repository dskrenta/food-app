import React from 'react';
import { Text, StyleSheet, View, Image, TouchableHighlight, TextInput, ScrollView } from 'react-native';
import { Rating, Icon } from 'react-native-elements';

class Location extends React.Component {
  state = {
    searchValue: null
  }

  onChangeText = (searchValue) => {
    this.setState({ searchValue })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContain}>
          <Icon name="search" size={20} color="#bbb" />
          <TextInput
            style={styles.searchBox}
            placeholder="Search Address"
            value={this.state.searchValue}
            onChangeText={this.onChangeText}
            underlineColorAndroid="rgba(0,0,0,0)"
            keyboardType="search"
          />
        </View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <TouchableHighlight
            onPress={() => {}}
            underlayColor="rgba(0,0,0,0)"
          >
            <View style={styles.row}>
              <Icon containerStyle={styles.icon} name="near-me" color="#39f" size={20} />
              <Text style={styles.label}>Use Current Location</Text>
            </View>
          </TouchableHighlight>
          {/* Search Results Here */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
    marginTop: 15,
    paddingLeft: 5
  },
  icon: {
    marginLeft: 15,
    marginRight: 10
  },
  label: {
    fontSize: 16
  },
  searchContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingLeft: 10,
    height: 50,
    borderRadius: 5
  },
  searchBox: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 45,
  }
});

Location.navigationOptions = {
  headerTitle: 'Select Location'
}

export default Location;
