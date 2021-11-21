import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const Header = ({title}) =>{
  return(
        <View style={styles.header}>

          <Text style={styles.text} > {title+" "} 
          <Image
        style={styles.logo}
        source={require('../../Assets/Images/food.jpg')}
      /></Text>
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
 backgroundColor: 'darkslateblue'

},
text:{
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'lobster-regular'
},
logo:{
  

  width: 50,
  height: 50,
  borderRadius: 60/ 2,
}
});
export default Header;