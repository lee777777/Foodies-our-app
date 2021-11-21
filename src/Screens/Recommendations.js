import React, {useContext,useState} from 'react';
import Header from '../components/Header';
import Home from './Home';
import Feed from './Feed';
import Explore from './Explore';
import authFlow from '../../App';

import {View,  StyleSheet, Text, FlatList, Image, Alert, Button} from 'react-native';
import SmallButton from '../components/SmallButton';
import {Context as AuthContext} from '../Context/AuthContext';

const Recommendations = ({ navigation }) =>{
  const {state, signout} = useContext(AuthContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SmallButton
        onPress={() =>
          Alert.alert(
      " Confirmation Alert",
      "Are you sure you want to logout from your account?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "yes", onPress: () =>   signout()}
      ],
    {
      cancelable: true}
    ) }
        title="Logout" />
      )

    });
  }, [navigation]);
  return(
    
        <View style={styles.container}>
          <Text style={{color:'black'}}>Tis is the Recommendations screen...</Text>
        </View>
      
  );

};
const styles = StyleSheet.create({
  
container: {
  flex:1,
  backgroundColor: '#fcf9f2'
},
btnView:{
  flexDirection: "row",
  color: '#fff',
  justifyContent: 'space-between'
},

});
export default Recommendations;