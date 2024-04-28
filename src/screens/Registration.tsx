import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Appbar, Card, TextInput, Button  } from 'react-native-paper'
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';


// interface RegistrationProps {
//     isAuthenticated: boolean;
//     onLogin: (email: string, password: string) => void;
//   }

//   interface RegistrationScreenProps {
//     route: RouteProp<RootStackParamList, 'Registration'>;
//     navigation: StackNavigationProp<RootStackParamList, 'Registration'>;
//   }
  

  const Registration: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Sign In" subtitle="Please sign in to continue"  titleStyle={styles.headerText}/>
    </Appbar.Header>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Card style={styles.card}>
        <TextInput label="Email" style={styles.input}/>
        <TextInput label="Password" secureTextEntry />
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log('Pressed')}>Sign In</Button>
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