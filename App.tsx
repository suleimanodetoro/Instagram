import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen'
import ProfileScreen from './src/screens/ProfileScreen/'



const App = () => {
  return (
    <View style={styles.app}>
        <ProfileScreen/>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})