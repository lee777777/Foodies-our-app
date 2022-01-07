import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function RoundBtn(props) {
  const { onPress, title, iconName, iconColor, iconSize } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons style={{justifyContent: 'center'}} name={iconName} size={iconSize} color={iconColor} />    
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    borderColor: 'black',
    borderWidth: 4,
    elevation: 3,
    width:66,
    height:66,
    backgroundColor: '#f49e73',
    margin: 5,
    flexDirection: 'column',
    shadowOffset: {width:1, height:1},
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  text: {
    fontSize: 10,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});