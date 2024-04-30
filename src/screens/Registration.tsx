import React, {useState} from 'react'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { Appbar, Card, TextInput, Button  } from 'react-native-paper'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {  RootState } from '../app/store'
import {  authenticateUser } from '../app/features/user/userSlice';





  const Registration: React.FC = () => {

    const [email, setEmailInput] = useState('');
    const [token , setToken] = useState('token');
    const [password, setPassword] = useState('');
    const userEmail = useAppSelector((state: RootState) => state.user.email);
    const userPassword = useAppSelector((state: RootState) => state.user.password);
    const isAuthenticated = useAppSelector((state: RootState) => state.user.isAuthenticated);
    const dispatch = useAppDispatch();
  
    const handleLogin = () => {
      // dispatch(setEmail(email));
      dispatch(authenticateUser({ email, password, token }));
      console.log("Redux State user email " +  userEmail);
      // console.log("Redux State user password " + userPassword);
      // console.log("Redux State auth " + isAuthenticated);
      // console.log("useState email " + email);
      // console.log("useState password " + password);
    };
  
  return (
    <SafeAreaView style={styles.safeArea}>
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Sign In" subtitle="Please sign in to continue"  titleStyle={styles.headerText}/>
    </Appbar.Header>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Card style={styles.card}>
        <TextInput 
          onChangeText={setEmailInput}
          value={email}
          label="Email" style={styles.input}/>
        <TextInput 
          onChangeText={setPassword}
          value={password}
          label="Password" secureTextEntry />
        <Card.Actions>
          <Button mode="contained" onPress={handleLogin}>Sign In</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  </SafeAreaView>
  )}
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      marginTop: 0, // Adjust for status bar height
      textAlign: 'center',
    },
    headerText: {  
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'grey',
    },
    card: {
      width: '80%', // or specific size
      padding: 15,
    },
    input:{
        marginBottom: 15,
    }
  });


export default Registration