import React from 'react';
import {View, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import SmallerBtn from './Buttons/SmallerBtn';
import RoundBtn from './Buttons/RoundBtn';

const UserProfile = ({id, uName}) =>{
  return(
        <View style={styles.viewContainer}>
             <Image style= { styles.backgroundImage } source={require('../../Assets/Images/food.jpg')}/>
        <View style={styles.rowAlign}>
        <View >
        <Image style={styles.img} source={require('../../Assets/Images/userpic.png')}/>
         <Text style={{fontWeight: 'bold', color:'black', marginLeft:'3%'}}>@{uName}</Text>
         <Text style={styles.text}>Hi, am {uName} and I make vegan recipes</Text>
        <SmallerBtn title="Edit"/>
        </View>
        </View>
        </View>
  );
};

const styles = StyleSheet.create({
viewContainer:{
    // marginTop:'3%',
    // marginBottom: '3%',
    // marginRight: '3%',
    // marginLeft: '3%',
    flex:1/2,
    // height: '20%', 
    // borderColor:'darkslateblue',
    margin: 5,
   
     padding:5,
     borderRadius: 15/2,
    // backgroundColor: '#e4bcf4'
},
backgroundImage:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.2
},
text:{
    color: 'black',
    width: 200,
    marginRight: '5%',
    marginLeft:'3%',
   
},
img:{
    width: 100,
    height: 100,
    borderRadius: 1000, 
    marginLeft: '3%',
    borderWidth: 3,
    marginTop: 3,
    marginBottom: 3
},
buttons:{
    margin: '10%'
},
TextBtns:{
    fontWeight: 'bold',
     color:'black',
      marginTop:6,
      fontSize: 14
},
rowAlign:{
flexDirection: 'row'
}
});
export default UserProfile;