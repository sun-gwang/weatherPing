import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import API_KEY from '@env'

export default function HomeScreen() {
  return (
    <>
    <View>
      <Image
        source={require('../asserts/images/wCall Logo.png')}
        style={{ width: 100, height: 100 }}
      />
      <Button
        title="로그인하기"
        onPress={(e) => {
          e.preventDefault();
          console.log("로그인 하기" + API_KEY);
        }}
        style={styles.btnLogin} />
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  btnLogin:{

  }
})