import * as React from 'react';
import {Button, View, Text, ScrollView, TouchableNativeFeedback} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
const CustomDrawerContent = (props) =>{
  
   
  return(
    
<DrawerContentScrollView {...props}>
      <DrawerItemList {...props}  />
    </DrawerContentScrollView>
      
  );

};

export default CustomDrawerContent;