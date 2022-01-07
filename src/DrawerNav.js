import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './components/CustomDrawerContent';
import FavRecipes from './Screens/FavRecipes';
import SavedRecipes from './Screens/SavedRecipes';
import Settings from './Screens/Settings';
import TabNav from './TabNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
const Icons =(isFocused, colorIcon, sizeIcon, iconName)=>{
    size= 25;
    //tomato #ce4404
    isFocused ? color='#ce4404': color='gray';
         return <Ionicons name={iconName} size={sizeIcon} color={colorIcon} />;
}

const DraweNav = () =>{
  return (
    <Drawer.Navigator
     drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Home"
     screenOptions={{
    drawerStyle: {
      backgroundColor: '#fcf9f2',

    },drawerActiveTintColor:
      '#fc7825',
      headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}
      
  }}>
       <Drawer.Screen name="Home"   navigationOptions= {{ headerVisible: false}} options={ {headerShown: false}, {headerMode: 'none'},
        { drawerIcon: ({ focused, color, size })=>Icons(focused, color, size, "home")}} component={TabNav} />
    <Drawer.Screen name="Favorite Recipes" component={FavRecipes} options={
         { drawerIcon: ({ focused, color, size })=>Icons(focused, color, size, "heart")}
    } />
<Drawer.Screen name="Saved Recipes" component={SavedRecipes} options={
   { drawerIcon: ({ focused, color, size })=>Icons(focused, color, size, "bookmark")}}
/>
<Drawer.Screen name="Settings" component={Settings} options={
   { drawerIcon: ({ focused, color, size })=>Icons(focused, color, size, "settings")}} />
</Drawer.Navigator>
  );
}
export default DraweNav;