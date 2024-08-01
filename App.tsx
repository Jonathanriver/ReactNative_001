import { Text, View, Button, StyleSheet, Pressable, SafeAreaView, Image } from 'react-native'
import React, { Component } from 'react'
import { ImageComponent } from './src/components/Image/ImageComponent'
import { DataPerson } from './src/components/dataPerson/DataPerson' 

export const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <ImageComponent></ImageComponent>
      </View>
      <DataPerson></DataPerson>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center'
  }
})


export default App