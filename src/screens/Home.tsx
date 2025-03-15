import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../screens/Style';


export default function Home() {
  return (
    <View style={styles.container}>
        <Text>Home works!</Text>
        <Text>Tudo funcionando</Text>
        <StatusBar style="dark" />
    </View>
    );
}

