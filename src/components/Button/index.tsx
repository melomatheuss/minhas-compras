import { TouchableOpacity,TouchableOpacityProps, Text  } from "react-native";
import { style } from "./styles";

type Props = TouchableOpacityProps &{
    title: string,
}

export function Button({ title, ...rest }:Props){
    return(
        <TouchableOpacity style={style.container} activeOpacity={0.8} {...rest}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}