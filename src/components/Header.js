import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const Header = ({title}) =>{
  return(
        <View style={styles.header}>

          <Text style={styles.text} > {title+" "} 
         </Text>
        </View>
  );
};
Header.defaultProps = {
    title: 'Foodies'
};
const styles = StyleSheet.create({
header: {
 height: 70,
 padding: 5,


},
text:{
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'lobster-regular'
}
});
export default Header;