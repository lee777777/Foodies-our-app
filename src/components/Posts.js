import React, {useState} from 'react';
import {View, Text, Alert, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Card from './Card';
const Posts = ({uName}) =>{
    const [posts, setPosts] = useState([
        {id: 1,title: 'vegan chocolate cake', likes: {number:7, isLiked:false}, body: 'bla bla two bla jhjg jjg dd', comments:{number:6, commentsArray:[{userName:'lee99', comment: 'wow! awsome recipe!', likes: {number:0, isLiked:false}},
        {userName:'leui', comment: 'did not like the recipe!', likes: {number:0, isLiked:false}},
        {userName:'lk', comment: 'did not like!', likes: {number:0, isLiked:false}},
        {userName:'leui', comment: 'did not like the recipe!', likes: {number:0, isLiked:false}},
        {userName:'leui', comment: 'did not like the recipe!', likes: {number:0, isLiked:false}},
        {userName:'leui', comment: 'did not like the recipe!', likes: {number:0, isLiked:false}}] } },
        {id: 2, title: 'vegan carrot cake', likes: {number:5, isLiked:false}, body: 'bvva bkkca wera bss jhjg jjg dd' , comments:{number:0, commentsArray:[{userName:'', comment: '', likes: {number:0, isLiked:false}}] } },
        {id: 3,title: 'vegan coffe cake', likes: {number:3, isLiked:false}, body: 'bla bff bla rfbla jhjg jjg dd' , comments:{number:0, commentsArray:[{userName:'', comment: '', likes: {number:0, isLiked:false}}] } },
        {id: 4,title: 'vegan pizza', likes: {number:10, isLiked:false}, body: 'kgcu bmm bla bla jhjg jjg dd', comments:{number:0, commentsArray:[{userName:'', comment: '', likes: {number:0, isLiked:false}}] } },
    ]);
    const deletePost = (id) => {
        Alert.alert(
            " Confirmation Alert",
            "Are you sure you want to delete this post?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "yes", onPress: () => setPosts(prevPosts => {
                return prevPosts.filter(post => post.id != id);
              })}
            ],
          {
            cancelable: true}
          );
      };
      const like = (post, id, isLikedValue) =>{
        if(post.id ==id){
            if(isLikedValue == true){
                post.likes.number +1;
                return post.likes.isLiked=isLikedValue;
            } else if(isLikedValue == true){
                post.likes.number -1;
                return post.likes.isLiked=isLikedValue;
            }
          
        }else{
          return  post;
        }
        
      };
      const ifLiked = (id, isLikedValue) =>{
        setPosts(prevPosts => {
            return prevPosts.map(post => like(post,id,isLikedValue));
          })
      };
    return(
<View style={styles.viewContainer}>
<FlatList data={posts}
     renderItem={({item}) =>(
          <Card uName={uName} item={item}
           deletePressed={deletePost} likePressed={ifLiked} /> )}/>
</View>
    );
};

const styles = StyleSheet.create({
    viewContainer:{
     flex: 1,
    },
});
export default Posts;