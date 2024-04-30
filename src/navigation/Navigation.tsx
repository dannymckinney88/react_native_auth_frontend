import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Registration from '../screens/Registration';
import Home from '../screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {  RootState } from '../app/store'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const Navigation: React.FC = () => {
  // This should be dynamic based on your auth state
  const isAuthenticated = useAppSelector((state: RootState) => state.user.isAuthenticated);
  console.log('isAuthenticated', isAuthenticated);

  const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );

  const HomeTabs = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ paddingBottom: 48 }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={Home}
      />
 
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};


export default Navigation;
