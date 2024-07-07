import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VenueList = () => {
  const [venues, setVenues] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('https://phtest.demosoftfruit.com/venue-api/')
      .then(response => {
        // console.log(response.data)
        setVenues(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const sortVenuesByDistance = (venues) => {
    if (venues.length <= 1) return venues;
    const pivot = venues[0];
    const left = [];
    const right = [];
    for (let i = 1; i < venues.length; i++) {
      if (venues[i].kilometres < pivot.kilometres)
        left.push(venues[i]);
      else
        right.push(venues[i]);
    }
    return [...sortVenuesByDistance(left), pivot, ...sortVenuesByDistance(right)];
  };

  const sortedVenues = sortVenuesByDistance(venues);
  // console.log(sortedVenues)

  const addFavorite = async (venue) => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      const isAlreadyFavorite = favorites.some((fav) => fav.id === venue.id);
      if (isAlreadyFavorite) {
        alert('This venue is already in favorites!');
      } else {
        const updatedFavorites = [venue, ...favorites];
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
      }
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  // const saveFavoritesToStorage = async () => {
  //   try {
  //     await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  //     console.log('Favorites saved successfully');
  //   } catch (e) {
  //     console.log('Error saving favorites:', e);
  //   }
  // };

  // useEffect(() => {
  //   saveFavoritesToStorage();
  // }, [favorites]);

  // console.log(favorites)
  
  return (
    <View style={styles.container}>
      <FlatList
        data={sortedVenues}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.venueItem}>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.kilometres} km</Text>
            <Text>{item.rating} Rating</Text>
            {item.sports.map((sport, index) => (
              <Text key={`${item.id}_${index}`}>{sport} - Price: {item.price[sport]}</Text>
            ))}
            <Button title="Favorite" onPress={() => addFavorite(item)} />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  venueItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default VenueList;