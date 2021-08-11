import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [pressed, setPressed] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Testing this text here</Text>
      <Button variant="primary" onPress={() => setPressed(!pressed)} title="Change Background"></Button>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
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
