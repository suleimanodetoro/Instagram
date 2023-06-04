import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import styles from '../FeedPost/styles';
interface ICarousel {
  post: string[];
}
const Carousel = ({images}: ICarousel) => {
  const {width} = useWindowDimensions();
  return (
    <View>
      <FlatList
        horizontal={true}
        pagingEnabled
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width: width, aspectRatio: 1}} />
        )}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((_, index) => (
            <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              margin:5,
              marginHorizontal:5,
              backgroundColor:'white'
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
