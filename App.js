// const Stack = createStackNavigator();
// function App() {
//   console.disableYellowBox = true;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="signup"
//           component={Signup}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="OtherInterests"
//           component={OtherInterests}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Interest"
//           component={Interest}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="QnA"
//           component={QnA}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={Profile}
//           options={{headerShown: false}}
//         />
//          <Stack.Screen
//           name="Tabs"
//           component={Tabs}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as AuthProvider} from './src/context/AuthContext.js';
import {Context as AuthContext} from './src/context/AuthContext';
import {AppState, View} from 'react-native';
import Login from './src/screens/Login';
import OtherInterests from './src/screens/OtherInterests';
import Interest from './src/screens/Interest';
import Profile from './src/screens/Profile';
import Tabs from './src/navigation/Tabs';
import QnA from './src/screens/QnA';
import Signup1 from './src/screens/Signup1.js';

const AuthStack = createStackNavigator();
console.disableYellowBox = true;

const Stack = createStackNavigator();
function App() {
  const {state} = useContext(AuthContext);
  function AuthFlow() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="signup"
          component={Signup1}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="OtherInterests"
          component={OtherInterests}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Interest"
          component={Interest}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="QnA"
          component={QnA}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
            <AuthStack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    );
  }

  function HomeFlow() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token == '' ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Auth"
            component={AuthFlow}
          />
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeFlow}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
