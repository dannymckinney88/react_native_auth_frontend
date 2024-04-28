import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React, {useState} from 'react';
import { PaperProvider } from 'react-native-paper';
import Registration from './screens/Registration';
import { Provider } from 'react-redux'
import store from './context/store';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const App: React.FC = () => {

 
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}

export default App




