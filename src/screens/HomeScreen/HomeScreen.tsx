import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FeedPost from '../../components/FeedPost/FeedPost'
import posts from '../../assets/data/posts.json'

const HomeScreen = () => {
  return (
        <FlatList
        data={posts}
        renderItem={ ({item}) => <FeedPost post={item}/>}
        keyExtractor={item=> `post-${item.createdAt}-${item.user.username}`}
        showsVerticalScrollIndicator={false}
        />

  )
}

export default HomeScreen

const styles = StyleSheet.create({})