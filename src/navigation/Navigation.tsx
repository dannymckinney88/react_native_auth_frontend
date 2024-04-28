import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from '../screens/Registration';


export type RootStackParamList = {
    Registration: undefined;
    // ... other screens
  };
const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {

      // Define your onLogin function and isAuthenticated state somewhere in this component or retrieve them from context/store
  const isAuthenticated = false; // This should be dynamic based on your auth state
  const onLogin = (email: string, password: string) => {
    // Implement your login logic
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={Registration}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;