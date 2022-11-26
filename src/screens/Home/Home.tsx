import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types";
import Select from "./Select";
import ListAnimal from "./ListAnimal";

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
    <View>
      <View>
        <Text>HOME</Text>
        <Text>Escolha uma categoria para visualizar</Text>
      </View>
      <Select
        currentCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ListAnimal currentCategory={selectedCategory} />
    </View>
  );
}

//? 1 - Colocar categoryId em animal = Feito
//? 2 - Componentizar um compoentne para o select e um para mostrar os animais
//? 3 - exibir os animais
//? 4 - fazer ele filtrar pela categoria
