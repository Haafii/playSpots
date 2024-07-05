import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorite = () => {

  const [favorites, setFavorites] = useState([]);

  const loadFavoritesFromStorage = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites !== null) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (e) {
      console.log('Error loading favorites from AsyncStorage:', e);
    }
  };


  useEffect(() => {
    loadFavoritesFromStorage();
  });

  
  const removeFavorite = async () => {
    try {
      const updatedFavorites = [...favorites];
      updatedFavorites.shift();
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (e) {
      console.log('Error removing favorite:', e);
    }
  };
  
  if (favorites.length === 0) {
    return (
      <View style={styles.containerNoFav}>
        <Text style={styles.text}>No Favorites</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
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
          </View>
        )}
      />
      <Button title="Remove" onPress={removeFavorite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerNoFav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  venueItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Favorite;
