import { Text, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types";
import Picker from "./Picker";
import ListAnimal from "./ListAnimal";
import Styles from "./styles";
import Modal from "../../components/ModalLoading";

export interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

export default function Home({ navigation }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const onSelect = (id: number) =>
    navigation.navigate("Description", { id: id });
  return (
    <>
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
          <ListAnimal
            onSelect={onSelect}
            currentCategory={selectedCategory}
            setIsLoading={setIsLoading}
          />
        </View>
        <View style={Styles.footer}></View>
      </View>

      <Modal modalVisible={isLoading} setModalVisible={setIsLoading} />
    </>
  );
}

//? 1 - Colocar categoryId em animal = Feito
//? 2 - Componentizar um compoentne para o select e um para mostrar os animais
//? 3 - exibir os animais
//? 4 - fazer ele filtrar pela categoria
