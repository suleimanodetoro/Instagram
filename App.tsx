import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from './src/theme/colors'
import { size, weight } from './src/theme/fonts'
import AntDesign from "react-native-vector-icons/AntDesign"

const App = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primaryColor,
      
    }}>
      <Text style={{fontSize: size.godzilla, fontWeight: weight.bold}}>This is an app</Text>
      <AntDesign name="stepforward" size={27}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
})