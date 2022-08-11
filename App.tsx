import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Calculator } from './src/calculator'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
      <Calculator />
    </View>
  );
}

