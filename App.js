import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Kacem(){
  return(
    <text>This is Kacem's component!</text>
  )
}

function Header(){
   return(
    <Text>Componenet Added</Text>
    // comment from mohammad
  );
}

function Footer(){
  return(
    <Text>This is a Footer</Text>
  );
}

function Error ({message, update}) {
  return (
    <View>
      <Text style={styles.error}>{message}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Kacem/>
      <Header/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
