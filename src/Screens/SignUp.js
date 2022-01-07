import React, {useState} from 'react';
import {globalStyles} from '../../Assets/Global';
import {View,  StyleSheet,TextInput, Text, Image, FlatList, Alert,
 Button,  TouchableWithoutFeedback, Keyboard, ActivityIndicator,} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import ButtonCostom from '../components/Buttons/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
const validationSchema = yup.object().shape({
  email: yup.string().label('Email').email().required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
});
const SignUp = ({ navigation }) =>{


    function isBlanck (em, pass, nam) {
      if(em=="" || pass=="" || nam==""){
        Alert.alert('OOPS', 'You must fill in all the Fields to signup', [
          {text: 'Understood', onPress: () => console.log('alert closed') }
        ]);
        return false;
      } else {
        return true;
      }
    };
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.formContainer}>
        <Text style={{  fontFamily: 'lobster-regular', color:'black', fontSize:28}}>Sign up</Text>   
        <Image
        style={globalStyles.logo}
        source={require('../../Assets/Images/food.jpg')}
      />
        <Text style={{  fontFamily: 'lobster-regular', marginBottom:'5%', color:'black', fontSize:18}}>"Food Connects"</Text> 
        <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <React.Fragment>
          <View >
            <Text style={globalStyles.formText}>Email:</Text>
            <View style={globalStyles.inputView}>
            <TextInput
              placeholder="johndoe@example.com"
              style={globalStyles.TextInput}
              onChangeText={formikProps.handleChange('email')}
              onBlur={formikProps.handleBlur('email')}
              
            />
            </View>
            <Text style={globalStyles.errorText}>
              {formikProps.touched.email && formikProps.errors.email}
            </Text>
          </View>

          <View>
            <Text style={globalStyles.formText}>Password:</Text>
            <View style={globalStyles.inputView}>
            <TextInput
              placeholder="password."
              style={globalStyles.TextInput}
              onChangeText={formikProps.handleChange('password')}
              onBlur={formikProps.handleBlur('password')}
              secureTextEntry
            />
            </View>
            <Text style={globalStyles.errorText}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>
          </View>

          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <View style={globalStyles.btnView}>
            <ButtonCostom title="Submit" onPress={formikProps.handleSubmit} />
            </View>
          )}
        </React.Fragment>
      )}
    </Formik> 
        </View>
        </TouchableWithoutFeedback>
  );

};

export default SignUp;