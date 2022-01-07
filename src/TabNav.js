import React, {useState} from 'react';
import Activity from './Screens/Activity';
import Home from './Screens/Home';
import Explore from './Screens/Explore';
import Profile from './Screens/Profile';
import AddPost from './Screens/AddPost';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const TabNav = ({ navigation }) =>{
  let activeTintColor = 'tomato';
  let inactiveTintColor = 'gray';
  let backgroundColor = 'white';
  React.useLayoutEffect(() => {
    navigation.setOptions({
    
      header: () => null
    });
  }, [navigation]);

  return(
    <Tab.Navigator  labeled={false}  screenOptions={ 
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
              ? 'home'
              : 'home';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'pizza' : 'pizza';
          }else if (route.name === 'Explore') {
            iconName = focused ? 'search' : 'search';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }
          else if (route.name === 'Post') {
            iconName = focused ? 'create' : 'create';
            activeTintColor= 'tomato';
            inactiveTintColor = 'black';
            backgroundColor = 'black';
           
          }

          // You can return any component that you like here!
          if(route.name === 'Post') {
          return  <View style={{backgroundColor:backgroundColor, paddingHorizontal: 15, paddingVertical:3,
           borderRadius: 4, alignContent: 'center',
           shadowOffset: {width:1, height:1},
            shadowColor: '#333',
            shadowOpacity: 0.3,
            shadowRadius: 2,}}><Ionicons name={iconName} size={size} color={focused ? 'tomato' : 'white'}/></View>;
          }else{
            return <Ionicons name={iconName} size={size} color={color}/>;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

      })} tabBarOptions={{showLabel:false}} >
     
     <Tab.Screen name="Home" component={Home} options={{ headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}} />
    <Tab.Screen name="Activity" component={Activity}  options={{ headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}}/>
    <Tab.Screen name="Post" component={AddPost}  options={{ headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}}/>
    <Tab.Screen name="Explore" component={Explore}  options={{ headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}}/>
    <Tab.Screen name="Profile" component={Profile}  options={{ headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}}/>

  </Tab.Navigator>
  
  );

};

export default TabNav;