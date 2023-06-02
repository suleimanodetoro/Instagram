import { InteractionManager, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { size,weight } from '../../theme/fonts';
import colors from '../../theme/colors';
import { IComment } from '../../types/models';

interface ICommentProps {
    comment: IComment
} 

const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comment}>
          {/* Comment text */}
          <Text style={styles.commentText}>
            <Text style={styles.bold}>{comment.user.username}</Text>{' '}{comment.comment}</Text>
          {/* comment like button */}

          <AntDesign
            name={'hearto'}
            size={size.default}
            style={styles.icon}
            color={colors.black}
          />
        </View>
  )
}

export default Comment

const styles = StyleSheet.create({
    comment:{
        flexDirection:'row',
        alignItems:'center'
    
      },
      commentText:{
        flex:1,
        color: colors.black
      },
      icon: {
        marginHorizontal: 5,
      },
      bold:{
        fontWeight: weight.bold
      },
})