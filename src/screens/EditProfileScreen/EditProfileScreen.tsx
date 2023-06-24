import {Image, StyleSheet, Text, View, TextInput} from 'react-native';
import React,{useState} from 'react';
import user from '../../assets/data/user.json';
import {size, weight} from '../../theme/fonts';
import colors from '../../theme/colors';
import {launchImageLibrary,launchCamera} from "react-native-image-picker"
interface ICustomInput {
    label: string;
    multiline?: boolean;

}
const CustomInput = ({label,multiline=false}: ICustomInput) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput multiline={multiline} style={styles.input}placeholder={label} />
    </View>
  );
};

const EditProfileScreen = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null)
    const onSubmit = () =>{
        console.warn("Submit")
    };

    const onChangePhoto = ()=>{
        launchImageLibrary({mediaType:'photo'}, ({didCancel,errorCode,errorMessage, assets})=>{
            if (!didCancel && !errorCode && assets && assets.length >0) {
                setSelectedPhoto(assets[0].uri)
                console.log(setSelectedPhoto)
            }
            
            

        }); //First parameter is the media type, and second is the callback function used after picking is done.
    }
  return (
    <View style={styles.page}>
      <Image source={{uri: selectedPhoto || user.image}} style={styles.avatar} />
      <Text onPress={onChangePhoto} style={styles.textButton}>Change Profile Photo</Text>

      <CustomInput label='Name'/>
      <CustomInput  label='Username'/>
      <CustomInput  label='Website'/>
      <CustomInput  label='Bio' multiline={true}/>

      {/* Text Submit Button */}

      <Text onPress={onSubmit}>Submit</Text>
      
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primaryColor,
    fontSize: size.medium,
    fontWeight: weight.semi,
    margin:10,
  },

  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'stretch',
    marginBottom:20,
  },
  label:{
    width: 75,
  },
  input:{
    flex:1,
    borderColor: colors.border,
    borderBottomWidth: 1,

  }
});
