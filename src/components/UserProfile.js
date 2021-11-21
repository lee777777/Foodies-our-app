import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const UserProfile = ({id, uName}) =>{
  return(
        <View style={styles.viewContainer}>
        <Image style={styles.img} source={require('../../Assets/Images/userpic.png')}/>
         <Text style={{fontWeight: 'bold', color:'black'}}>{uName}</Text>
         <Text style={styles.text}> Hi, am Leen and I make vegan recipes</Text>
         <TouchableOpacity style={styles.btn} >
            <Text style={styles.btnText} >Follow</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.btn} >
            <Text style={styles.btnText}>Message</Text>
           </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
viewContainer:{
    // marginTop:'3%',
    // marginBottom: '3%',
    // marginRight: '3%',
    // marginLeft: '3%',
    flex:1,
    height: '20%', 
    borderColor:'darkslateblue',
    borderWidth: 3,
    borderRadius: 15/2,
    backgroundColor: '#e4bcf4'
},
text:{
    color: 'black'
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
btn:{
    borderRadius: 10/2,
     marginLeft: '30%',
    
  
    marginTop: '5%',
    backgroundColor: '#c2bad8',
     borderWidth: 1,
    borderColor:'black',
    padding: 4,
    width: 85,
     
},
btnText: {
    color: 'darkslateblue',
    fontSize: 15,
    textAlign: 'center'
}
});
export default UserProfile;