import React from "react";
import { Text, View } from "react-native";
import api from "../../services/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types";
import Styles from "./styles";

export interface DescriptionProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Description">;
}

interface descriptionType {
  id: number;
  name: string;
  categoryId: number;
  age: number;
  img: string;
  description: string;
  phone: number;
  email: string;
}

export default function Description({ navigation }: DescriptionProps) {
  const [description, setDescription] = React.useState<descriptionType>();

  React.useEffect(() => {
    const animalId = navigation
      .getState()
      .routes.find((item) => item.name == "Description")?.params?.id;
    getDescription(animalId);
  }, []);

  async function getDescription(animalId: number | undefined) {
    try {
      const response = await api.get("/animal/1");
      setDescription(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View>
      <Text>{description?.name}</Text>
    </View>
  );
}
