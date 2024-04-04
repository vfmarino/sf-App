import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/header';
import Main from './src/main';
import Footer from './src/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#204c7a',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
