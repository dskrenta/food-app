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
        <TextInput
          style={styles.searchBox}
          placeholder="Search Address"
          value={this.state.searchValue}
          onChangeText={this.onChangeText}
          underlineColorAndroid='rgba(0,0,0,0)'
        />
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
    marginHorizontal: 10
  },
  label: {
    fontSize: 16
  },
  searchBox: {
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    margin: 5,
    height: 45,
  }
});

Location.navigationOptions = {
  headerTitle: 'Select Location'
}

export default Location;