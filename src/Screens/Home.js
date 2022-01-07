import React, {useContext} from 'react';
import UserProfile from '../components/UserProfile';
import Posts from '../components/Posts';
import {View,  StyleSheet,TouchableOpacity, Image,Text, FlatList, Alert, Button} from 'react-native';
import SmallButton from '../components/Buttons/SmallButton';
import {Context as AuthContext} from '../Context/AuthContext';
import {globalStyles} from '../../Assets/Global';



const Home = ({ navigation }) =>{
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
        { text: "yes", onPress: () =>signout()}
      ],
    {
      cancelable: true}
    ) }
        title="Logout" />
      ),
       headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <Image
    style={{width: 30, height: 30, marginLeft: 5}}
    source={require('../../Assets/Images/drawerPic.png')}/>
  </TouchableOpacity>
  ),
    });
  }, [navigation]);
  return(
    
        <View style={globalStyles.container}>
<Text>Home screen</Text>
        </View>
      
  );

};

export default Home;