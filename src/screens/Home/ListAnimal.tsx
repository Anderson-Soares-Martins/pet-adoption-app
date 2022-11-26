import React from "react";
import { View, Text, FlatList, ListRenderItem } from "react-native";
import api from "../../services/api";

interface animalType {
  id: number;
  name: string;
  categoryId: number;
  age: number;
  img: string;
}

interface Props {
  currentCategory: number;
}

export default function ListAnimal(props: Props) {
  const [animal, setAnimal] = React.useState<animalType[]>([]);

  const filteredCategory = animal.filter((a, index) =>
    props.currentCategory == 0 ? animal : props.currentCategory == a.categoryId
  );
  async function getAnimal() {
    try {
      const response = await api.get("/animal");
      setAnimal(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getAnimal();
  }, []);

  const renderItem = ({ item }: { item: animalType }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <Text>Resultado da busca:</Text>
      <FlatList
        data={filteredCategory}
        renderItem={renderItem}
        keyExtractor={(item: animalType) => item.name}
      />
    </View>
  );
}
