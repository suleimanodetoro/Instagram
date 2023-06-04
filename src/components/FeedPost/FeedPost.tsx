import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {size} from '../../theme/fonts';
import colors from '../../theme/colors';
import Comment from '../Comment/Comment';
import {IPost} from '../../types/models';
import DoublePressable from '../DoublePressable/';
import Carousel from '../Carousel/Carousel';

interface IFeedPost {
  post: IPost;
}

const FeedPost = (props: IFeedPost) => {
  const {post} = props;

  const [descriptionExpended, setDescriptionExpanded] = useState(false);
  const toggleDescriptionExpansion = () => {
    setDescriptionExpanded(existingValue => {
      return !descriptionExpended;
    });
  };

  const [isLiked, setLikeState] = useState(false);
  const toggleLikeState = () => {
    setLikeState(value => !value);
  };

  let content = null;
  if (post.image) {
    content = <Image style={styles.image} source={{uri: post.image}} />;
  } else if (post.images) {
    content = <Carousel images={post.images} />;
  }

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />

        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name={'dots-three-horizontal'}
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <DoublePressable onDoublePress={toggleLikeState}>
        {content}
      </DoublePressable>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLikeState}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>

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
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        {/* lIKED BY XXX  */}
        {/* Text element nesting is allowed in react native */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>iddrissanddu</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>
        {/* Post Description */}
        <Text
          numberOfLines={descriptionExpended ? 0 : 3}
          onPress={toggleDescriptionExpansion}>
          <Text style={styles.text}>
            <Text style={styles.bold}>{post.user.username}</Text>{' '}
            {post.description}
          </Text>
        </Text>

        {/* Post Comments */}
        <Text style={{color: 'grey'}}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted Date */}
        <Text style={{color: 'grey'}}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
