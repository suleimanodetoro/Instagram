import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from '../FeedPost/styles';
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable/DoublePressable';

interface ICarousel {
  post: string[];
  onDoublePress: () => void;
}
const Carousel = ({images, onDoublePress}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 55, // do x when component is 50% visible
  };
  // Everytime the flatlist component is rerendered, the following function is recreated.
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveImageIndex(viewableItems[0].index || 0);
    }
  });
  return (
    <View>
      <FlatList
        horizontal={true}
        pagingEnabled
        data={images}
        renderItem={({item}) => (
            <DoublePressable onDoublePress={onDoublePress}>
              <Image source={{uri: item}} style={[styles.image, {width}]} />
            </DoublePressable>
          )}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
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
              margin: 5,
              marginHorizontal: 5,
              backgroundColor:
                activeImageIndex === index ? colors.primaryColor : colors.white,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
