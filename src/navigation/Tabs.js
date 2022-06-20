import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Groups from '../screens/Groups';
import Editpofile from '../screens/Editprofile';
import Events from '../screens/Events';

const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      barStyle={{background: '#151C20', borderColor: '#A1B1B3'}}
    >
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          headerShown: false,
          tabBarLabel: 'Groups',
          tabBarColor: '#151C20',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: false,
          tabBarLabel: 'Events',
          tabBarColor: '#151C20',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="movie-open" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Editprofile"
        component={Editpofile}
        options={{
          headerShown: false,
          tabBarLabel: 'Edit Profile',
          tabBarColor: '#151C20',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
