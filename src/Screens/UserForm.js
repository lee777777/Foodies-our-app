import React, {useState, useContext} from 'react';
import Home from './Home';
import ButtonCostom from '../components/Button';
import {View,  StyleSheet,TextInput, Text, Image, FlatList, Alert, Button} from 'react-native';
import {Context as AuthContext} from '../Context/AuthContext';
import Icon from 'react-native-ionicons'
const UserForm = ({ navigation }) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const {state, signin} = useContext(AuthContext);
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <ButtonCostom
          onPress={() =>
            Alert.alert(
        " Confirmation Alert",
        "Are you sure you want to create a new account?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "yes", onPress: () => navigation.navigate('SignUp') }
        ],
      {
        cancelable: true}
      ) }
          title="SignUp" />
        ),
      });
    }, [navigation]);


    function isBlanck (em, pass, nam) {
      if(em=="" || pass=="" || nam==""){
        Alert.alert('OOPS', 'You must fill in all the Fields to login', [
          {text: 'Understood', onPress: () => console.log('alert closed') }
        ]);
        return false;
      } else {
        return true;
      }
    };
  return(
    
        <View style={styles.container}>
        <Text style={{  fontFamily: 'lobster-regular', color:'black', fontSize:28}}>Foodies</Text> 
        <Image
        style={styles.logo}
        source={require('../../Assets/Images/food.jpg')}
      />
        <Text style={{  fontFamily: 'lobster-regular', marginBottom:'5%', color:'black', fontSize:18}}>"Food Connects"</Text> 
    <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Enter your email here..."
      placeholderTextColor="#705964"
      onChangeText={(emailTx) => setEmail(emailTx)}
    />
  </View>
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Enter your name here..."
      placeholderTextColor="#705964"
      onChangeText={(nameTx) => setName(nameTx)}
    />
  </View>
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Enter your password here..."
      placeholderTextColor="#705964"
      // keyboardType="visible-password"
      secureTextEntry={true}
      onChangeText={(passwordTx) => setPassword(passwordTx)}
    />
  </View>
          <View style={styles.btnView}>
          <ButtonCostom  onPress={() => {if(isBlanck (email, password, name))
          { signin({email, password});}}} title='Login' /> 
          </View>   
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
export default UserForm;