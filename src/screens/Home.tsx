import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import { Button } from 'react-native-paper';
import { logoutUser } from '../app/features/user/userSlice';
import { useAppDispatch } from '../app/hooks';

const Home = () => {
  const dispatch = useAppDispatch(); 
  const handleLogout = () => {
   
    dispatch(logoutUser());  
  };

  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
      <Button icon="snake" mode="contained" onPress={handleLogout}>
        Sign out
      </Button>
    </SafeAreaView>
  )
}

export default Home