import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function profile() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={{backgroundColor:'#fff', width: '80%'}}
          contentContainerStyle={styles.scrollContainer}>

          <Image source={require('../asserts/images/카리나1.jpg')} style={styles.profileImage}/>
          <View style={styles.profileBox}>
            <View style={styles.textElement}>
              <Text>본명</Text>
              <Text>카리나</Text>
            </View>

            <View style={styles.textElement}>
              <Text>출생</Text>
              <Text>2022년 4월 11일</Text>
              <Text>경기도 수원시 팔달구 지동</Text>
            </View>

            <View style={styles.textElement}>
              <Text>신체</Text>
              <Text>168cm | B형 | 230mm</Text>
            </View>

            <View style={styles.textElement}>
              <Text>가족</Text>
              <Text>아버지 유철, 어머니, 언니</Text>
            </View>

            <View style={styles.textElement}>
              <Text>학력</Text>
              <Text>성남신기초등학교(졸업)</Text>
            </View>

            <View style={styles.textElement}>
              <Text>소속사</Text>
              <Text>SM엔터테인먼트</Text>
            </View>

            <View style={styles.textElement}>
              <Text>소속사</Text>
              <Text>SM엔터테인먼트</Text>
            </View>

            <View style={styles.textElement}>
              <Text>소속사</Text>
              <Text>SM엔터테인먼트</Text>
            </View>

            <View style={styles.textElement}>
              <Text>소속사</Text>
              <Text>SM엔터테인먼트</Text>
            </View>

            <View style={styles.textElement}>
              <Text>소속사</Text>
              <Text>SM엔터테인먼트</Text>
            </View>

            <View style={styles.textElement}>
              <Text>소속사</Text>
              <Text>SM엔터테인먼트</Text>
            </View>

            <View style={styles.textElement}>
              <Text>소속사</Text>
              <Text>SM엔터테인먼트</Text>
            </View>

            <View style={styles.textElement}>
              <Text>소속사</Text>
              <Text>SM엔터테인먼트</Text>
            </View>

            <View style={styles.textElement}>
              <Text>소속사</Text>
              <Text>SM엔터테인먼트</Text>
            </View>

        </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00a69c'
  },

  scrollContainer:{
    alignItems: 'center', padding: 10, marginTop: 50 
  },

  profileBox:{
    borderStyle: 'solid', borderWidth: 2, borderColor: '#000',
  },

  profileImage:{
    width: 300, height: 400,  marginBottom: 20,
  },

  textElement: {
    flexDirection: 'row', justifyContent: 'space-between', padding: 10, 
    borderBottomWidth: 1, borderBottomColor: '#ccc'
  }
})