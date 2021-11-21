import React, {useState} from 'react';
import UserForm from './src/Screens/UserForm';
import SignUp from './src/Screens/SignUp';
import TabNav from './src/TabNav';
import * as Font from "expo-font";
import Apploading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as AuthProvider} from './src/Context/AuthContext.js';
import {Context as AuthContext} from './src/Context/AuthContext';
const getFonts = () =>{
  return Font.loadAsync({
    'lobster-regular': require('./Assets/fonts/Lobster-Regular.ttf'),
    'SourceCodePro-regular': require('./Assets/fonts/SourceCodePro-Regular.ttf'),
    'SourceCodePro-bold': require('./Assets/fonts/SourceCodePro-Bold.ttf')
  });
};


const AuthStack = createNativeStackNavigator();
 function authFlow() {
  return (
    <AuthStack.Navigator screenOptions={{headerTitleStyle: { fontFamily: 'lobster-regular', fontSize:25}}}>
      <AuthStack.Screen
        options={{ title: 'Login' }}
        name="Signin"
        component={UserForm}
      />
      <AuthStack.Screen
        name="SignUp" 
        component={SignUp} 
        options={{ title: 'SignUp' }} 
      />
    </AuthStack.Navigator>
  );
}
function homeFlow() {
  return (
<TabNav/>
  );
}
const Stack = createNativeStackNavigator();
const App = () =>{
const[fontsLoaded, setFontsLoaded] = useState(false);
const {state} = React.useContext(AuthContext);
  console.log(state);
if(fontsLoaded){ 
  return(
    <NavigationContainer>
<Stack.Navigator>
        {state.token === null ? (
          <>
            <Stack.Screen
              name="Auth"
              options={{headerShown: false}}
              component={authFlow}
            />
          </>
        ) : (
          <Stack.Screen
            name="HomeTabs"
            options={{headerShown: false}}
            component={homeFlow}
          />
        )}
      </Stack.Navigator>
      </NavigationContainer>
  );
}else{
  return(
  <Apploading startAsync={getFonts} onFinish={() =>setFontsLoaded(true)}  onError={() => console.log('error')}/>
  );
}
};
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};