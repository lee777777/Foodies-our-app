import React from 'react';
import {View, Text,  StyleSheet, TouchableOpacity} from 'react-native';

const Posts = () =>{
    return(
<View style={styles.viewContainer}><Text style={{color:'black'}}>Posts and recipes of the user Here</Text></View>
    );
};

const styles = StyleSheet.create({
    viewContainer:{
     flex: 1,
    },
});
export default Posts;