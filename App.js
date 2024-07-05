import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VenueList from './src/screens/VenueList';
import Favorite from './src/screens/Favorite';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="VenueList"
          component={VenueList}
          options={{
            tabBarLabel: 'Venue List',
            tabBarIcon: ({ color, size }) => (
              <Icon name="list-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
