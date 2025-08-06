import { View, Image, TouchableOpacity, Text, FlatList} from "react-native"
import { styles} from "./styles"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { Items } from "@/components/Item"

import { FilterStatus } from "@/types/FilterStatus"

//pra deixar dinamico a exibicao dos filtros 
const FILTER_STATUS : FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING]
const ITEMS = [
  {id: "1", status: FilterStatus.DONE, description: "1 pacote de café"},
  {id: "2", status: FilterStatus.PENDING, description: "Leite (1 litro)"},
  {id: "3", status: FilterStatus.PENDING, description: "Pão de forma"},
  {id: "4", status: FilterStatus.PENDING, description: "Ovos (1 dúzia)"},
  {id: "5", status: FilterStatus.PENDING, description: "Arroz (5kg)"},
  {id: "6", status: FilterStatus.DONE, description: "Feijão preto (1kg)"},
  {id: "7", status: FilterStatus.DONE, description: "Sabão em pó"},
  {id: "8", status: FilterStatus.DONE, description: "Shampoo"},
  {id: "9", status: FilterStatus.DONE, description: "Creme dental"},
  {id: "10", status: FilterStatus.DONE, description: "Papel higiênico (pacote)"}
]

export function Home(){
  return(
    <View style={styles.container}>

      <Image style={styles.logo} source={require("@/assets/logo.png")}/>

      <View style={styles.form}>
        <Input placeholder="Cade o macaco???"/>
        <Button title="Entrar " />       
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          { FILTER_STATUS.map((status) => (
              <Filter key={status} isActive status={status}/>
          ))}
          
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>
              limpar
            </Text>
          </TouchableOpacity>

        </View>

          <FlatList 
            data={ITEMS}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <Items
                data={item} 
                onRemove={() => console.log("remover nego ney")} 
                onStatus={() => console.log("Mudou o   status")}
              
                />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui!</Text>}
          />

      </View>
      
    </View>
  )
}

