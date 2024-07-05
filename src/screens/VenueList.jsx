// // VenueList.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
// import axios from 'axios';

// const VenueList = () => {
//     const [venues, setVenues] = useState([]);
//     const [favorites, setFavorites] = useState([]);

//     useEffect(() => {
//         axios.get('https://phtest.demosoftfruit.com/venue-api/')
//             .then(response => {
//               console.log(response.data)
//                 setVenues(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }, []);

//     const addFavorite = (venue) => {
//         setFavorites([venue, ...favorites]);
//     };

//     const removeFavorite = () => {
//         setFavorites(favorites.slice(1));
//     };

//     const sortVenuesByDistance = (venues) => {
//         if (venues.length <= 1) return venues;
//         const pivot = venues[0];
//         const left = [];
//         const right = [];
//         for (let i = 1; i < venues.length; i++) {
//             if (venues[i].kilometres < pivot.kilometres) left.push(venues[i]);
//             else right.push(venues[i]);
//         }
//         return [...sortVenuesByDistance(left), pivot, ...sortVenuesByDistance(right)];
//     };

//     const sortedVenues = sortVenuesByDistance(venues);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Venues</Text>
//             <FlatList
//                 data={sortedVenues}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.venueItem}>
//                         <Text>{item.name}</Text>
//                         <Text>{item.kilometres} km</Text>
//                         <Button title="Favorite" onPress={() => addFavorite(item)} />
//                     </View>
//                 )}
//             />
//             <Text style={styles.title}>Favorites</Text>
//             <Button title="Remove Favorite" onPress={removeFavorite} />
//             <FlatList
//                 data={favorites}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.venueItem}>
//                         <Text>{item.name}</Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     venueItem: {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
// });

// export default VenueList;


// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
// import axios from 'axios';

// const VenueList = () => {
//     const [venues, setVenues] = useState([]);
//     const [favorites, setFavorites] = useState([]);

//     useEffect(() => {
//         axios.get('https://phtest.demosoftfruit.com/venue-api/')
//             .then(response => {
//                 setVenues(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }, []);

//     const addFavorite = (venue) => {
//         setFavorites([venue, ...favorites]);
//     };

//     const removeFavorite = () => {
//         setFavorites(favorites.slice(1));
//     };

//     const sortVenuesByDistance = (venues) => {
//         if (venues.length <= 1) return venues;
//         const pivot = venues[0];
//         const left = [];
//         const right = [];
//         for (let i = 1; i < venues.length; i++) {
//             if (venues[i].kilometres < pivot.kilometres) left.push(venues[i]);
//             else right.push(venues[i]);
//         }
//         return [...sortVenuesByDistance(left), pivot, ...sortVenuesByDistance(right)];
//     };

// const sortedVenues = sortVenuesByDistance(venues);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Venues</Text>
//             <FlatList
//                 data={sortedVenues}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.venueItem}>
//                         <Text style={styles.venueText}><Text style={styles.label}>Name:</Text> {item.name}</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>Distance:</Text> {item.kilometres} km</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>Address:</Text> {item.address}</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>City:</Text> {item.city}</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>State:</Text> {item.state}</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>Country:</Text> {item.country}</Text>
//                         <Button title="Favorite" onPress={() => addFavorite(item)} />
//                     </View>
//                 )}
//             />
//             <Text style={styles.title}>Favorites</Text>
//             <Button title="Remove Favorite" onPress={removeFavorite} />
//             <FlatList
//                 data={favorites}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.venueItem}>
//                         <Text style={styles.venueText}><Text style={styles.label}>Name:</Text> {item.name}</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>Distance:</Text> {item.kilometres} km</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>Address:</Text> {item.address}</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>City:</Text> {item.city}</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>State:</Text> {item.state}</Text>
//                         <Text style={styles.venueText}><Text style={styles.label}>Country:</Text> {item.country}</Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     venueItem: {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         marginBottom: 10,
//     },
//     venueText: {
//         fontSize: 16,
//         marginBottom: 5,
//     },
//     label: {
//         fontWeight: 'bold',
//     },
// });

// export default VenueList;







import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import axios from 'axios';

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


  const addFavorite = (venue) => {
    setFavorites([venue, ...favorites]);
  };

  console.log(favorites)
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
              <Text>{sport} - Price: {item.price[sport]}</Text>
            ))}
            <Button title="Favorite" onPress={() => addFavorite(item)} />
          </View>
        )}
      />
      {/* <Text style={styles.title}>Favorites</Text> */}
      {/* <Button title="Remove Favorite" onPress={removeFavorite} /> */}
      {/* <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.venueItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      /> */}
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