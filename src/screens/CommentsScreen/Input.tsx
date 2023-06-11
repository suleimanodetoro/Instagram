import { StyleSheet, Text, View,Image, TextInput, Pressable } from 'react-native'
import React,{useState} from 'react'
import colors from '../../theme/colors'
import { size, weight } from '../../theme/fonts'

const Input = () => {
    const [newComment, setNewComment] = useState('')


    const onPost = () =>{
        console.log('posting the comment');
        setNewComment('')
    }
  return (
    <View style={styles.root}>
     <Image style={styles.image} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'}}/>
     <TextInput value={newComment} multiline onChangeText={newText => setNewComment(newText)} style={styles.input} placeholder='Write your comment...' />
     <Text onPress={onPost} style={styles.button}>POST</Text>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        padding:5,
        borderTopWidth:1,
        borderColor: colors.border,
        alignItems:'flex-end',
    },
    image:{
        width:40,
        aspectRatio:1,
        borderRadius: 20,
    },
    input:{
        flex:1,
        borderColor: colors.border,
        borderWidth:1,
        borderRadius:25,
        paddingVertical:10,
        paddingHorizontal:10,
        marginHorizontal:5,
        paddingRight:15,//to make sure text does not cover post button

    },
    button:{
        position: 'absolute',
        right:15,
        bottom:15,
        fontSize: size.small,
        fontWeight: weight.semi,
        color:'blue'
    },
})