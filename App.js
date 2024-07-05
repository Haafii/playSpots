import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VenueList from './src/screens/VenueList';
import Favorite from './src/screens/Favorite';
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="VenueList" component={VenueList} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
