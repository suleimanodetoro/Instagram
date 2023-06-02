import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from "react-native-vector-icons/Entypo"
import styles from './styles';
import { size } from '../../theme/fonts';
import colors from '../../theme/colors';
import Comment from '../Comment/Comment';
import { IPost } from '../../types/models';

interface IFeedPost {
    post: IPost
}

const FeedPost = (props : IFeedPost) => {
    const {post} = props;
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image

          }} style={styles.userAvatar} />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo name={'dots-three-horizontal'} size={16} style={styles.threeDots} />

      </View>

      {/* Content */}
      <Image source={{
        uri: post.image
      }} style={styles.image} />
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: 'auto' }}
            color={colors.black}
          />

        </View>
        {/* lIKED BY XXX  */}
        {/* Text element nesting is allowed in react native */}
        <Text style={styles.text}>
          Liked by{' '}
            <Text style={styles.bold}>iddrissanddu</Text>{' '}
              and{' '}
                <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>
        {/* Post Description */}
        <Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>{post.user.username}</Text>{' '}
            {post.description}
          </Text>
        </Text>

        {/* Post Comments */}
        <Text style={{color:"grey"}}>View all {post.nofComments} comments</Text>
        {post.comments.map( comment => (
            <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted Date */}
        <Text style={{color:"grey"}}>{post.createdAt}</Text>
        


      </View>



    </View>
  )
}

export default FeedPost

