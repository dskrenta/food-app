import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DEFAULT_DEPRECATION_REASON } from 'graphql';

const RestaurantCard = ({ item, height }) => (
  <View style={styles.card}>
    {'image' in item && <Image style={styles.image} source={{uri: item.image}} />}
    <View style={styles.infoContain}>
      {'title' in item && <Text style={styles.title}>{item.title}</Text>}
      {'address' in item && 
        <View style={[styles.detailContain]}>
          <Icon name="place" color="#067" size={20} />
          <Text style={styles.feature} numberOfLines={1}>{item.address}</Text>
        </View>
      }
      {'description' in item && <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>}
      {'references' in item &&
        <View style={styles.detailContain}>
          <Icon name="star" color="#39f" size={20} />
          <Text style={styles.feature}>Featured in {item.references[0].siteName}</Text>
        </View>
      }
      <View style={styles.detailContain}>
        {'distance' in item &&
          <View style={styles.detail}>
            <Icon name="directions-walk" color="#067" size={22} style={styles.distanceIcon} />
            <Text style={styles.distance}>{item.distance} mi</Text>
          </View>
        }
        {'rating' in item &&
          <View style={styles.detail}>
            <Text style={styles.rating}>{item.rating}/5</Text>
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
    margin: 5
  },
  image: {
    height: undefined,
    width: '100%',
    flex: 1,
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
    fontSize: 20,
    color: '#333'
  },
  distanceIcon: {
    marginTop: 8
  },
  rating: {
    fontSize: 20,
    color: '#333',
    marginBottom: 4
  },
  feature: {
    paddingLeft: 5,
    paddingTop: 1
  }
});

export default RestaurantCard;
