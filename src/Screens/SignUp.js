import React, {useState} from 'react';

import ButtonCostom from '../components/Button';
import {View,  StyleSheet,TextInput, Text, Image, FlatList, Alert, Button} from 'react-native';



const SignUp = ({ navigation }) =>{


    function isBlanck (em, pass, nam) {
      if(em=="" || pass=="" || nam==""){
        Alert.alert('OOPS', 'You must fill in all the Fields to signup', [
          {text: 'Understood', onPress: () => console.log('alert closed') }
        ]);
        return false;
      } else {
        return true;
      }
    };
  return(
    
        <View style={styles.container}>
        <Text style={{  fontFamily: 'lobster-regular', color:'black', fontSize:28}}>Sign up</Text>    
        </View>
      
  );

};
const styles = StyleSheet.create({
  
container: {
  flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fcf9f2'
},
btnView:{
  flexDirection: "row",
  color: '#fff',
  justifyContent: 'space-between'
},
inputView: {
    backgroundColor: "#f49e73",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'black'
  },
  logo:{
    width: 100,
    height: 100,
    borderRadius: 60/ 2,
  }
});
export default SignUp;