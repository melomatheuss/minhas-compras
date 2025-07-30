import { View, Image} from "react-native"
import { styles} from "./styles"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"

export function Home(){
  return(
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")}/>
      
      <View style={styles.form}>
        <Input placeholder="Cade o macaco?"/>
        <Button title="Entrar " />       
      </View>

      <View style={styles.content}>

      </View>
    </View>
  )
}

