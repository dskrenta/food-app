import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  Dimensions, 
  Platform 
} from 'react-native';
import { Rating, Icon } from 'react-native-elements';

import {
  referencesToString,
  roundTo1Decimal
} from '../../utils/utils';

const { height, width } = Dimensions.get('window');
const cardHeight = height - (Platform.OS === 'ios' ? 150 : 130);

const RestaurantCard = ({ item, height }) => (
  <View style={styles.card}>
    {'image' in item && <Image style={styles.image} source={{uri: item.image}} />}
    <View style={styles.infoContain}>
      {'title' in item && <Text style={styles.title}>{item.title}</Text>}
      {('references' in item) &&
        <View style={styles.detailContain}>
          <Icon name="star" color="#39f" size={20} />
          <Text style={styles.feature}>{`Featured in ${referencesToString(item.references)}`}</Text>
        </View>
      }
      {'address' in item &&
        <View style={[styles.detailContain]}>
          <Icon name="place" color="#067" size={20} />
          <Text style={styles.feature} numberOfLines={1}>{item.address}</Text>
        </View>
      }
      {'description' in item && <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>}
      <View style={styles.detailContain}>
        {'distance' in item &&
          <View style={styles.detail}>
            <Icon name="directions-walk" color="#067" size={22} style={styles.distanceIcon} />
            <Text style={styles.distance}>{roundTo1Decimal(item.distance)} mi</Text>
          </View>
        }
        {'rating' in item &&
          <View style={styles.detail}>
            <Text style={styles.rating}>{item.rating}</Text>
            <Rating
              imageSize={18}
              readonly
              startingValue={item.rating}
            />
          </View>
        }
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    margin: 5
  },
  image: {
    height: cardHeight * 0.4,
    width: '100%',
    resizeMode: 'cover'
  },
  infoContain: {
    padding: 15,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  desc: {
    textAlign: 'center',
    paddingBottom: 2
  },
  detailContain: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  detail: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  distance: {
    fontSize: 18,
  },
  distanceIcon: {
    marginTop: 8
  },
  rating: {
    fontSize: 18,
    marginBottom: 4
  },
  feature: {
    paddingLeft: 5,
    paddingTop: 1
  }
});

export default RestaurantCard;
