import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper';
import Registration from './src/screens/Registration';
import { Provider } from 'react-redux'
import store from './src/context/store';
import { useEffect } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const App: React.FC = () => {
  useEffect(() => {
    console.log(store.getState())
  }, []);
  
  return (
    <Provider store={store}>
      <PaperProvider>
        <Registration />
      </PaperProvider>
    </Provider>
  );
}

export default App




