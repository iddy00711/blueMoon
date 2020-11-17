import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animations from './src/animations';
import NavPort from './src/NavPort';
import SkyAnimation from './src/skyAnimation';
import Wave from './src/Wave'



export default function App() {
  return (
    // <Wave/>
    // <Animations/>
     <NavPort/>
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
