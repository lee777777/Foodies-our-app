import { StyleSheet } from 'react-native';

    export const globalStyles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#fcf9f2'
          },
          formContainer: {
            flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fcf9f2'
          },
          card:{
            borderRadius: 6,
            elevation: 3,
            backgroundColor: '#fff',
            shadowOffset: {width:1, height:1},
            shadowColor: '#333',
            shadowOpacity: 0.3,
            shadowRadius: 2,
            margin: 10
           },
           carddContent:{
             marginHorizontal: 10,
             marginVertical:10
           },
           cardHeader:{
               flexDirection: 'row',
               justifyContent: 'space-between',
          
           },
           cardTitle:{
               fontSize: 19,
               fontFamily: 'lobster-regular',
               color: 'black',
               textAlign: 'center'
           },
           cardUser:{
           color:'#ce4404'
           },
           cardBody:{
               color: 'black'
           },
           cardBtnView:{
            flexDirection: "row",
            color: '#fff',
            justifyContent: 'space-between'
          },
          cardButton:{
              flexDirection: 'row',
              textDecorationColor:  'tomato',
              marginRight: '3%',
      
          },
          cardButtons:{
            marginTop: '3%',
            justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        padding:3,
        paddingTop:4
        },
          inputView: {
              backgroundColor: "#f49e73",
              borderRadius: 30,
              width: "70%",
              height: 45,
              marginBottom: 20,
              alignItems: "center",
            },
            TextInput: {
              height: 50,
              flex: 1,
              padding: 10,
              marginLeft: 20,
              color: 'black',
              minWidth: 270
            },
            logo:{
              width: 100,
              height: 100,
              borderRadius: 60/ 2,
            },
            errorText: {
              color: 'crimson',
              marginBottom: 3,
              textAlign: 'center',
            },
            formText:{
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
            }
    });
