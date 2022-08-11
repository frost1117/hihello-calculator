import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ text, orange, wide, onClick }: ButtonProps) {
  return (
    <View style={[styles.container, { width: wide ? '50%' : '25%' }]}>
      <TouchableOpacity
        style={
          [styles.button,
          {
            backgroundColor: orange ? 'orange' : '#686868',
            width: wide ? 165 : 75
          }]
        }
        onPress={() => onClick(text)}
      >
        <Text style={styles.label}>{text}</Text>
      </TouchableOpacity>

    </View>
  )
}

interface ButtonProps {
  text: string
  onClick: (buttonText: string) => void
  orange?: boolean
  wide?: boolean
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 30,
    color: '#fff'
  }
})
