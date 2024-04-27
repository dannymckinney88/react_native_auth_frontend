import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper';
import Registration from './src/screens/Registration';
import { Provider } from 'react-redux'
import Store from './src/context/store';

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
    <Provider store={Store}  >   
      <PaperProvider>
        <Registration />
      </PaperProvider>
    </Provider>
  )
}

export default App




