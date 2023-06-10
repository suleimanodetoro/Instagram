import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewabilityConfig, ViewToken,
} from 'react-native';
import React,{useRef,useState} from 'react';
import FeedPost from '../../components/FeedPost/FeedPost';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState < string | null > (null)
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 55, // do x when component is 50% visible
  };
  // Everytime the flatlist component is rerendered, the following function is recreated.
  const onViewableItemsChanged = useRef(({viewableItems}:{viewableItems : Array<ViewToken>}) => {
    if (viewableItems.length > 0) {
      console.log(viewableItems);
      setActivePostId(viewableItems[0].item.id);
    }
  });

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} isVisible={activePostId === item.id} />}
      keyExtractor={item => `post-${item.createdAt}-${item.user.username}`}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
