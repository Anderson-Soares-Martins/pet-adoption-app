import { Text, View } from "react-native";
import { useState } from "react";
import api from "../../services/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types";
import Picker from "./Picker";
import ListAnimal from "./ListAnimal";
import Styles from "./styles";

export interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

export default function Home({ navigation }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  async function getDescriptionAnimal() {
    try {
      const response = await api.get("/animal/1");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.message}>HOME</Text>
        <Text style={Styles.subMessage}>
          Escolha uma categoria para visualizar
        </Text>
        <Picker
          currentCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
      <View style={Styles.body}>
        <Text style={Styles.bodyText}>Resultado da busca:</Text>
        <ListAnimal currentCategory={selectedCategory} />
      </View>
      <View style={Styles.footer}></View>
    </View>
  );
}

//? 1 - Colocar categoryId em animal = Feito
//? 2 - Componentizar um compoentne para o select e um para mostrar os animais
//? 3 - exibir os animais
//? 4 - fazer ele filtrar pela categoria
