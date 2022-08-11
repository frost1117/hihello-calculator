import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Display = ({ text }: DisplayProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

interface DisplayProps {
  text: string | null
}


const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '500'
  }
})

