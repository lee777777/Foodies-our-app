import React, {useState} from 'react';

import Feed from './Screens/Feed';
import Home from './Screens/Home';
import Explore from './Screens/Explore';
import Recommendations from './Screens/Recommendations';
import {View,  StyleSheet,TextInput, Text, Image, FlatList, Alert, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const TabNav = () =>{



  return(
    <Tab.Navigator labeled={false}  screenOptions={   
      {
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      },
      ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size= 30;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home-outline'
              : 'home-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'pizza-outline' : 'pizza-outline';
          }else if (route.name === 'Explore') {
            iconName = focused ? 'search-outline' : 'search-outline';
          }
          else if (route.name === 'Recommendations') {
            iconName = focused ? 'fast-food-outline' : 'fast-food-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })} tabBarOptions={{showLabel:false}} >
     <Tab.Screen name="Home" component={Home} options={{ headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}} />
    <Tab.Screen name="Feed" component={Feed}  options={{ headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}}/>
    <Tab.Screen name="Explore" component={Explore}  options={{ headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}}/>
    <Tab.Screen name="Recommendations" component={Recommendations} options={{ headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}}/>
  </Tab.Navigator>
  
  );

};

export default TabNav;