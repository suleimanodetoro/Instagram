import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from './src/theme/colors'
import { size, weight } from './src/theme/fonts'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from "react-native-vector-icons/Entypo"
import FeedPost from './src/components/FeedPost'
import posts from './src/assets/data/posts.json'


const App = () => {
  const post = {
    id: '1',
    createdAt: '19 December 2021',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
    user: {
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      username: 'suleimanodetoro',
    },
    nofComments: 11,
    nofLikes: 33,
    comments: [
      {
        id: '1',
        comment: 'Hello there😉',
        user: {
          username: 'notkenny_',
        },
      },
      {
        id: '2',
        comment: 'Yo, this is sick man!',
        user: {
          username: 'idrissandu',
        },
      },
    ],
  };
  return (
    <View style={styles.app}>
        <FlatList
        data={posts}
        renderItem={ ({item}) => <FeedPost post={item}/>}
        keyExtractor={item=> `post-${item.createdAt}-${item.user.username}`}
        />


    </View>
  )
}

export default App

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})