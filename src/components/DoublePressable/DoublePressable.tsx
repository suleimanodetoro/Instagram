import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{ ReactNode} from 'react'
interface IDoublePressable {
    onDoublePress?: () => void; 
    children: ReactNode; //use this to render the iimage/video between the double opressable tag whenusing it
}
//If nothing is passed to onDoublePress, a default empty function value will be given (defined in prop handling below)
const DoublePressable = ({onDoublePress = ()=>{},children }: IDoublePressable) => {
    let lastTap = 0;
    const handleDoublePress = () =>{
        const now = Date.now();
        if (now - lastTap < 300) {
            onDoublePress();
        };
        lastTap= now;

    }
  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  )
}

export default DoublePressable

const styles = StyleSheet.create({})