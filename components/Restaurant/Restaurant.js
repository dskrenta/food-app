import React from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  StyleSheet, 
  Image, 
  Dimensions,
  TouchableHighlight
} from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import CarouselPager from 'react-native-carousel-pager';

import {
  referencesToString,
  roundTo1Decimal
}  from '../../utils/utils';

const { height, width } = Dimensions.get("window");

const Restaurant = ({ navigation, navigation: { state: { params: { item: { 
  title,
  images,
  references,
  rating, 
  address,
  description,
  distance,
  url
} } } } }) => (
  <ScrollView style={styles.contain}>
      <Text style={styles.title}>{title}</Text>
    <View style={styles.imagePager}>
      <CarouselPager ref={ref => this.carousel = ref}>
        {images.map((imageUrl, index) => (
          <Image key={index} source={{uri: imageUrl}} style={styles.image} />
        ))}
      </CarouselPager>
    </View>
    <View style={styles.mainRow}>
      <View style={styles.detail}>
        <Icon name="directions-walk" color="#067" containerStyle={styles.detailIcon} />
        <Text style={styles.detailText}>{roundTo1Decimal(distance)}<Text style={styles.detailSpan}> mi</Text></Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.detailText}>{rating} / 5</Text>
        <Rating
          imageSize={20}
          readonly
          startingValue={rating}
        />
      </View>
      <TouchableHighlight onPress={() => navigation.navigate('Webview', { url })}>
        <View style={styles.detail}>
          <Icon name="language" color="#067" size={27} containerStyle={styles.detailIcon} />
          <Text style={styles.linkText}>Website</Text>
        </View>
      </TouchableHighlight>
    </View>
    <View style={styles.infoHeader}>
      <View style={styles.row}>
        <Icon name="grade" color="#39f" containerStyle={styles.rowIcon} />
        <Text style={styles.rowText}>{`Featured in ${referencesToString(references)}`}</Text>
      </View>
      {/*sampleRestaurant.references.map((item, index) => ('quote' in item &&
        <View key={index} style={styles.row}>
          <Icon name="format-quote" color="#39f" containerStyle={styles.rowIcon} />
          <Text style={styles.rowText}>{item.quote}<Text style={styles.quoteAuthor}> - {item.siteName}</Text></Text>
        </View>
      ))*/}
      <View style={styles.row}>
        <Icon name="info-outline" color="#067" containerStyle={styles.rowIcon} />
        <Text style={styles.rowText}>{description}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="location-on" color="#067" containerStyle={styles.rowIcon} />
        <Text style={styles.rowText}>{address}</Text>
      </View>
      {/*<Text style={[styles.status, sampleRestaurant.status === 'Open Now' && {color: 'green'}]}>{sampleRestaurant.status}</Text>*/}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  contain: {
    backgroundColor: 'white',
    flex: 1
  },
  imagePager: {
    width: '100%',
    height: height * 0.4,
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: height * 0.4,
    resizeMode: 'cover'
  },
  infoHeader: {
    paddingHorizontal: 30,
    paddingBottom: 25
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 20,
    textAlign: 'center',
    color: '#333'
  },
  status: {
    fontSize: 16
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5
  },
  mainRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  detail: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5
  },
  detailIcon: {
    paddingBottom: 5
  },
  detailText: {
    fontSize: 18,
    marginBottom: 8,
    color: '#444'
  },
  detailSpan: {
    fontSize: 16
  },
  rowIcon: {
    marginRight: 10,
    alignSelf: 'flex-start'
  },
  rowText: {
    fontSize: 16,
    paddingTop: 1,
    flex: 1,
    color: '#666'
  },
  linkIcon: {
    paddingBottom: 1
  },
  linkText: {
    fontSize: 16,
    flex: 1,
    color: '#444'
  },
  quoteAuthor: {
    color: '#999'
  }
});

export default Restaurant;
