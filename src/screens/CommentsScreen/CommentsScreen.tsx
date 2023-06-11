import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment/';

const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails/>}
        style={{padding:10}}
      />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({});
