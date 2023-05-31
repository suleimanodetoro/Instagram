import { TextStyle } from "react-native"
const size={
    extrasmall:10,
    small:12,
    default:14,
    medium:16,
    large:20,
    jumbo:24,
    godzilla:30
}

const weight: {[key:string] : TextStyle["fontWeight"]} ={
    thin:'400',
    semi:'600',
    full:'900',
    bold:'bold',
    normal:'normal',
}

export {size, weight}