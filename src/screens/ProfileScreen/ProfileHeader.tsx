import {Image, Text, View, } from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button/';
const ProfileHeader = () => {
    return (
      <View style={styles.root}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          {/* Profile picture */}
          <Image source={{uri: user.image}} style={styles.avatar} />
  
          {/* Posts, Followers, Following */}
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text style={styles.metadataText}>Posts</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>150</Text>
            <Text style={styles.metadataText}>Followers</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text style={styles.metadataText}>Following</Text>
          </View>
        </View>
        {/* User Name */}
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.bio}</Text>
        </View>
  
        {/* Profile Buttons */}
  
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Edit Profile"
            onPress={() => {
              console.warn('button pressed');
            }}
          />
          <Button
            text="Share Profile"
            onPress={() => {
              console.warn('button pressed');
            }}
          />
        </View>
  
        
      </View>
    );
  };

  export default ProfileHeader