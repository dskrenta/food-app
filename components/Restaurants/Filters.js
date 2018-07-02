import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { COLORS } from '../../utils/constants';

class Filters extends React.Component {
  state = {
    searchValue: null,
    closer: 0,
    better: 0,
    veg: 0,
    meat: 0,
    wine: 0,
    cocktails: 0,
    kids: 0,
    cheap: 0
  }
  
  onChangeText = (value) => {
    this.setState({searchValue: value});
  }

  render() {
    const { toggleDrawer, drawerOpen } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.contain} keyboardShouldPersistTaps="never">
        <View style={styles.topButtons}>
          <Button 
            title="Closer" 
            onPress={() => {this.setState({closer: (this.state.closer + 1) % 6 })}}
            buttonStyle={styles.closerButton}
            containerViewStyle={styles.topButtonContainer}
            textStyle={{color: '#007558'}}
            backgroundColor={COLORS.closer[this.state.closer]}
          />
          <Button 
            title={drawerOpen ? "Filters" : "Close"}
            onPress={toggleDrawer} 
            buttonStyle={styles.filterButton} 
            containerViewStyle={styles.topButtonContainer}
            textStyle={{color: '#067'}}
            backgroundColor="#fff"
          />
          <Button 
            title="Better"
            onPress={() => {this.setState({better: (this.state.better + 1) % 6 })}}
            buttonStyle={styles.betterButton} 
            containerViewStyle={styles.topButtonContainer}
            textStyle={{color: '#073678'}}
            backgroundColor={COLORS.better[this.state.better]}
          />
        </View>
        <Text style={styles.filterMessage}>What are you looking for?</Text>
        <View style={styles.searchContain}>
          <Icon name="search" size={20} color="#bbb" />
          <TextInput
            style={styles.searchBox}
            placeholder="Search Places"
            value={this.state.searchValue}
            onChangeText={this.onChangeText}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
        </View>
        <View style={styles.buttonRow}>
          <Button 
            title="Veg"
            onPress={() => {this.setState({veg: (this.state.veg + 1) % 6 })}}
            buttonStyle={styles.mainButton} 
            containerViewStyle={styles.buttonContainer}
            textStyle={{color: '#206020'}}
            backgroundColor={COLORS.veg[this.state.veg]}
          />
          <Button 
            title="Meat"
            onPress={() => {this.setState({meat: (this.state.meat + 1) % 6 })}}
            buttonStyle={styles.mainButton} 
            containerViewStyle={styles.buttonContainer}
            textStyle={{color: '#800000'}}
            backgroundColor={COLORS.meat[this.state.meat]}
          />
        </View>
        <View style={styles.buttonRow}>
          <Button 
            title="Wine"
            onPress={() => {this.setState({wine: (this.state.wine + 1) % 6 })}}
            buttonStyle={styles.mainButton} 
            containerViewStyle={styles.buttonContainer}
            textStyle={{color: '#5b244e'}}
            backgroundColor={COLORS.wine[this.state.wine]}
          />
          <Button 
            title="Cocktails"
            onPress={() => {this.setState({cocktails: (this.state.cocktails + 1) % 6 })}}
            buttonStyle={styles.mainButton} 
            containerViewStyle={styles.buttonContainer}
            textStyle={{color: '#002b80'}}
            backgroundColor={COLORS.cocktails[this.state.cocktails]}
          />
        </View>
        <View style={styles.buttonRow}>
          <Button 
            title="Kids"
            onPress={() => {this.setState({kids: (this.state.kids + 1) % 6 })}}
            buttonStyle={styles.mainButton} 
            containerViewStyle={styles.buttonContainer}
            textStyle={{color: '#803300'}}
            backgroundColor={COLORS.kids[this.state.kids]}
          />
          <Button 
            title="Cheap"
            onPress={() => {this.setState({cheap: (this.state.cheap + 1) % 6 })}}
            buttonStyle={styles.mainButton} 
            containerViewStyle={styles.buttonContainer}
            textStyle={{color: '#008000'}}
            backgroundColor={COLORS.cheap[this.state.cheap]}
          />
        </View>
        <View style={styles.clearContain}>
          <Button 
            title="Clear Filters"
            buttonStyle={styles.clearButton}
            containerViewStyle={styles.clearButtonContainer}
            backgroundColor="#067"
          />
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  contain: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 25
  },
  topButtons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    height: 60,
    width: '100%'
  },
  filterButton: {
    height: 40,
    elevation: 1,
    borderRadius: 5,
    margin: 10
  },
  closerButton: {
    height: 40,
    elevation: 1,
    borderRadius: 5,
    margin: 5
  },
  betterButton: {
    height: 40,
    elevation: 1,
    borderRadius: 5,
    margin: 5
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    width: '100%'
  },
  mainButton: {
    elevation: 1,
    height: 40,
    borderRadius: 5
  },
  topButtonContainer: {
    borderRadius: 5,
    margin: 5,
    marginLeft: 0,
    marginRight: 0,
    flex: 1
  },
  buttonContainer: {
    width: '50%',
    padding: 10,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 5
  },
  clearContain: {
    paddingHorizontal: 35,
    paddingVertical: 10
  },
  clearButton: {
    elevation: 1,
    height: 40,
    borderRadius: 5,
  },
  clearButtonContainer: {
    marginLeft: 0,
    marginRight: 0
  },
  filterMessage: {
    paddingHorizontal: 35,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  searchContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 1,
    marginVertical: 5,
    marginHorizontal: 35,
    paddingLeft: 12,
    height: 50,
    borderRadius: 5
  },
  searchBox: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
    height: 50,
  },
});

export default Filters;