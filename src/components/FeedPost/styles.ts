import { StyleSheet } from "react-native";
import colors from '../../theme/colors'
import { weight } from '../../theme/fonts'

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
  
    },
    userName: {
      fontWeight: weight.bold,
      color: colors.black,
  
    },
    threeDots: {
      marginLeft: 'auto',
    },
    footer: {
      padding: 10
    },
    iconContainer: {
      flexDirection: 'row',
      padding: 7,
    },
    icon: {
      marginHorizontal: 5,
    },
    post: {
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    text:{
      color: colors.black,
      lineHeight:16,
    },
    bold:{
      fontWeight: weight.bold
    },
  })

  export default styles;