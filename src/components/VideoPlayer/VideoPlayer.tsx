import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface IVideo {
  uri: string;
  paused: boolean;
}
const VideoPlayer = ({uri,paused}: IVideo) => {
  const [muteState, setMuteState] = useState(true);
  const toggleMute = () => {
    setMuteState(v => !v);
  };
  return (
    <View>
      <Video
        source={{uri}}
        repeat
        paused={paused}
        resizeMode="contain"
        muted={muteState}
        style={styles.video}
      />
      <Pressable style={styles.muteButton} onPress={toggleMute}>
        <Ionicons
          name={muteState ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={'white'}
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100^',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
