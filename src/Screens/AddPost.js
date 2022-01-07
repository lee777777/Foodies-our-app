import React, {useContext,useState} from 'react';
import {globalStyles} from '../../Assets/Global';
import {View,  StyleSheet, Text,TouchableOpacity, FlatList, Image, Alert, Button} from 'react-native';
import SmallButton from '../components/Buttons/SmallButton';
import {Context as AuthContext} from '../Context/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
const AddPost = ({ navigation }) =>{
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
      ),
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 5}} onPress={() => navigation.goBack()}>
      <Ionicons name={'arrow-back'} size={30} color={'black'} />
        </TouchableOpacity> 
      )

    });
  }, [navigation]);
  return(
    
        <View style={globalStyles.container}>
          <Text style={{color:'black'}}>Add a new post in this screen...</Text>
        </View>
      
  );

};


export default AddPost;