import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import signup from './src/screens/signup';
import OtherInterests from './src/screens/OtherInterests';
import Interest from './src/screens/Interest';
import Profile from './src/screens/Profile';

const Stack = createStackNavigator();
function App() {
  console.disableYellowBox = true;
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}/>
          <Stack.Screen
          name="signup"
          component={signup}
          options={{headerShown: false}}/>
          <Stack.Screen
          name="OtherInterests"
          component={OtherInterests}
          options={{headerShown: false}}/>
          <Stack.Screen
          name="Interest"
          component={Interest}
          options={{headerShown: false}}/>
          <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}/>
   
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
