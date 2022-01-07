import * as React from 'react';
import {Button, View, StyleSheet, Text, SafeAreaView} from 'react-native';
import SmallButton from '../components/Buttons/SmallButton';
import {globalStyles} from '../../Assets/Global';
const Settings = ({ navigation }) =>{
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SmallButton 
        onPress={() => navigation.navigate('Home')}
        title="Home" />
      )
    });
  }, [navigation]);
  return(
    <View style={globalStyles.container}>
    <Text style={{color:'black'}}>This is the Settings screen...</Text>
  </View>

      
  );

};

export default Settings;