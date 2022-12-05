import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { api } from "../../services/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types";
import Styles from "./styles";
import Modal from "../../components/ModalLoading";

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
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const animalId = navigation
      .getState()
      .routes.find((item) => item.name == "Description")?.params?.id;
    getDescription(animalId);
  }, []);

  async function getDescription(animalId: number | undefined) {
    try {
      const response = await api.get("/animal/" + animalId);
      setIsLoading(false);
      setDescription(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.header}>
          <View style={Styles.containerImage}>
            <Image style={Styles.image} source={{ uri: description?.img }} />
          </View>
        </View>

        <View style={Styles.body}>
          <ScrollView>
            <Text style={Styles.message}>Nome</Text>
            <Text style={Styles.subMessage}>{description?.name}</Text>
            <Text style={Styles.message}>Idade</Text>
            <Text style={Styles.subMessage}>{description?.age} anos</Text>
            <Text style={Styles.message}>Descrição</Text>
            <Text style={Styles.subMessage}>{description?.description}</Text>
            <Text style={Styles.message}>Contato</Text>
            <Text style={Styles.subMessage}>Email: {description?.email}</Text>
            <Text style={Styles.subMessage}>Phone: {description?.phone}</Text>
          </ScrollView>
        </View>
      </View>

      <Modal modalVisible={isLoading} setModalVisible={setIsLoading} />
    </>
  );
}
