import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'


const App = () => {
  return (
    <View style={styles.app}>
        <HomeScreen/>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})