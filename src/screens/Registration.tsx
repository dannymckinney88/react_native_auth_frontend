import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Appbar, Card, TextInput, Provider as PaperProvider } from 'react-native-paper'

const Registration = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Sign In" subtitle="Please sign in to continue"  titleStyle={styles.headerText}/>
    </Appbar.Header>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Card style={styles.card}>
        <TextInput label="Email" />
        <TextInput label="Password" secureTextEntry />
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
      padding: 20,
    },
  });


export default Registration