import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


// #75afff

type Props = {
  title : String;
  onPress : (event: GestureResponderEvent) => void;
  style ?: object;
}
export default function Button({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...style, ...styles.button }}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10, borderRadius: 5, alignItems: 'center',
  },
  buttonText: {
    color: '#000', fontWeight:'bold', fontSize: 16,
  },
})
