import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function SmallerBtn(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    maxWidth: 100,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: 'black',
    margin: 5
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontFamily: 'SourceCodePro-regular',
  },
});