import React, {useContext} from 'react';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import AddPost from '../components/AddPost';
import Posts from '../components/Posts';
import Feed from './Feed';
import Explore from './Explore';
import UserForm from './UserForm';
import Recommendations from './Recommendations';
import {View,  StyleSheet, Image,Text, FlatList, Alert, Button} from 'react-native';
import SmallButton from '../components/SmallButton';
import {Context as AuthContext} from '../Context/AuthContext';

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
      )
     
    });
  }, [navigation]);
  return(
    
        <View style={styles.container}>
<UserProfile uName={ state.email}/> 
          <Posts/>
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
export default Home;