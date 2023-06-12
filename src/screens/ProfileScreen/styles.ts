import { StyleSheet } from "react-native";
import { size, weight } from "../../theme/fonts";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    root:{
        padding:15,
    },
    headerRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between"

    },
    avatar:{
        width:100,
        aspectRatio:1,
        borderRadius: 50
    },
    numberContainer:{
        alignItems:'center',


    },
    numberText:{
        fontSize: size.medium,
        fontWeight: weight.full,
        color: colors.black,
    },
    metadataText:{
        color: colors.grey,
    },
    name:{
        fontWeight: weight.bold,
        fontSize: size.small,
        color: colors.black
    }

})

export default styles;