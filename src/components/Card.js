import React, {useState} from 'react';
import {View, Text,  StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comments from '../Screens/Comments';
import {globalStyles} from '../../Assets/Global';

const Card = ({item, likePressed,uName, deletePressed}) =>{
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () =>{
        setModalOpen(false);
    };
    return(
        <View>
<Modal style={styles.modelContent} visible={modalOpen} animationType="slide">
    <Comments uName={uName} thePost={item} closeComments={closeModal}/>
</Modal>
<View style={globalStyles.card}>
<View style={globalStyles.carddContent}>
<View style={globalStyles.cardHeader}>
<TouchableOpacity>
<Text style={globalStyles.cardUser}>@{uName}</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => deletePressed(item.id)}>
<Ionicons name='settings' size={24} color='#ce4404' /> 
</TouchableOpacity>
</View>
<Text style={globalStyles.cardTitle}>{item.title}</Text>
<View
style={{borderBotltomColor: 
'black', borderBottomWidth: 1}}/>
<Text style={globalStyles.cardBody}>{item.body}</Text>
<View style={globalStyles.cardButtons}>
<TouchableOpacity  style={globalStyles.cardButton}>
<Text style={{color:'tomato'}}>{item.likes.number}</Text>
<Ionicons name='heart' size={25} color='tomato' /> 
</TouchableOpacity>
<TouchableOpacity onPress={() =>setModalOpen(true)} style={globalStyles.cardButton}>
<Text style={{color:'tomato'}}>{item.comments.number}</Text>
<Ionicons name='chatbubbles' size={25} color='tomato' /> 
 </TouchableOpacity>
 <TouchableOpacity style={globalStyles.cardButton}>
<Text style={{color:'tomato'}}>0</Text>
<Ionicons name='repeat' size={25} color='tomato' /> 
 </TouchableOpacity>
 <TouchableOpacity style={globalStyles.cardButton}>
<Ionicons name='download' size={25} color='tomato' /> 
 </TouchableOpacity>
 </View>
</View>
</View>
</View>
    );
};

const styles = StyleSheet.create({


    modelContent:{
        flex:1,        
    }


});
export default Card;