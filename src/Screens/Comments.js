import React, {useContext,useState} from 'react';
import Header from '../components/Header';
import {View,  StyleSheet, Text, TouchableOpacity,FlatList, Image, Alert, Button} from 'react-native';
import SmallButton from '../components/Buttons/SmallButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Context as AuthContext} from '../Context/AuthContext';
import {globalStyles} from '../../Assets/Global';
const Comments = ({  uName, closeComments , thePost}) =>{
  const {state, signout} = useContext(AuthContext);
  const array = thePost.comments.commentsArray;

  return(
    
        <View style={globalStyles.container}>
        <Header title="Comments"/>
        <View style={globalStyles.card}>
        <View style={globalStyles.carddContent}>
        <View style={globalStyles.cardHeader}>
        <Text style={globalStyles.cardUser}>@{uName}</Text>
        </View> 
        <View>
          <Text style={globalStyles.cardTitle}>{thePost.title}</Text> 
          </View> 
          <Text style={globalStyles.cardBody}>{thePost.body}</Text> 
          </View>
          </View>
          <SmallButton onPress={() => closeComments()} title="Go Back"/>
          {(thePost.comments.number==0)?
            <Text style={styles.nothingText}>There is no comments to show here...</Text>:
           
              <FlatList data={array}
     renderItem={({item}) =>(
       <View style={{margin:'3%'}}>
        <View style={globalStyles.carddContent}>
        <View style={globalStyles.cardHeader}>
        <Text style={globalStyles.cardUser}>@{item.userName}</Text>
        {(item.userName == state.name)?      
<TouchableOpacity><Ionicons name='trash' size={24} color='#ce4404' /></TouchableOpacity>:
<TouchableOpacity><Ionicons name='sad' size={25} color='#ce4404' /></TouchableOpacity>
}
</View>
        <Text style={globalStyles.cardBody}>{item.comment}</Text>
        <View style={globalStyles.cardButtons}>
        <TouchableOpacity style={globalStyles.cardButton}>
<Text style={{color:'tomato'}}>0</Text>
<Ionicons name='chatbubbles' size={25} color='tomato' /> 
 </TouchableOpacity>
 <TouchableOpacity  style={globalStyles.cardButton}>
<Text style={{color:'tomato'}}>{item.likes.number}</Text>
<Ionicons name='heart' size={25} color='tomato' /> 
</TouchableOpacity>
 </View>
 <View
style={{borderBotltomColor: 
'black', borderBottomWidth: 1}}/>
        </View>
        </View>
     )}/>
      }     
        </View>
      
  );

};

const styles = StyleSheet.create({


  button:{
      flexDirection: 'row',
      textDecorationColor:  'tomato',
      marginRight: '3%',

  },
  nothingText:{
    color: 'black',
    textAlign: 'center',
    marginTop: '5%',
   
  }


});
export default Comments;