import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from './src/theme/colors'
import { size, weight } from './src/theme/fonts'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from "react-native-vector-icons/Entypo"


const App = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'

          }} style={styles.userAvatar} />
        <Text style={styles.userName}>suleimanodetoro</Text>
        <Entypo name={'dots-three-horizontal'} size={16} style={styles.threeDots} />

      </View>

      {/* Content */}
      <Image source={{
        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
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
            <Text style={styles.bold}>iddrissanddu</Text> 
              and{' '}
                <Text style={styles.bold}>14,234 others</Text>
        </Text>
        {/* Post Description */}
        <Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>iddrissanddu</Text>{' '}
            Rahhh, cool github brahhhlorem skdj wiblad lwiugw weiuf wIUEfogwq piuwefbi sdiablkfb liug 
          </Text>
        </Text>

        {/* Post Comments */}
        <Text style={{color:"grey"}}>View all comments</Text>
        <View style={styles.comment}>
          {/* Comment text */}
          <Text style={styles.commentText}>
            <Text style={styles.bold}>iddrissanddu</Text>{' '}
            Rahhh, cool github brahhhlorem skdj wiblad lwiugw weiuf wIUEfogwq piuwefbi sdiablkfb liug 
          </Text>
          {/* comment like button */}

          <AntDesign
            name={'hearto'}
            size={size.default}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        


      </View>



    </View>
  )
}

export default App

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,

  },
  userName: {
    fontWeight: weight.bold,
    color: colors.primaryColor,

  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10
  },
  iconContainer: {
    flexDirection: 'row',
    padding: 7,
  },
  icon: {
    marginHorizontal: 5,
  },
  post: {
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  text:{
    color: colors.black,
    lineHeight:16,
  },
  bold:{
    fontWeight: weight.bold
  },
  comment:{
    flexDirection:'row',
    alignItems:'center'

  },
  commentText:{
    flex:1,
    color: colors.black
  },
})