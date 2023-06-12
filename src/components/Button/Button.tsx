import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../theme/colors';
import { weight } from '../../theme/fonts';
interface IButton {
    text?: string;
    onPress?: ()=>void;
}

const Button = ({text="", onPress=()=>{} }: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1,
        borderColor: colors.black,
        borderRadius:5,
        padding:5,
        margin:5,
        alignItems:"center",
        
    },
    text:{
        color: colors.black,
        fontWeight: weight.semi,
        
    },
})