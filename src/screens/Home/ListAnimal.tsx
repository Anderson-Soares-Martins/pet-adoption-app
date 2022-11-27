import React from "react";
import Svg, { Path } from "react-native-svg";
import {
  mdiRabbit,
  mdiDog,
  mdiBird,
  mdiCat,
  mdiFish,
  mdiRodent,
} from "@mdi/js";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
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

  const icons = (categoryId: number) => {
    switch (categoryId) {
      case 1:
        return mdiDog;
      case 2:
        return mdiCat;
      case 3:
        return mdiBird;
      case 4:
        return mdiFish;
      case 5:
        return mdiRodent;
      case 6:
        return mdiRabbit;
    }
  };

  const renderItem = ({ item }: { item: animalType }) => (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: item.img }} />
      <View style={styles.informations}>
        <View style={styles.info}>
          <Svg width="25" height="25" viewBox="0 0 25 25">
            <Path d={icons(item.categoryId)} fill="black" />
          </Svg>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.age}>{item.age} anos</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={filteredCategory}
        renderItem={renderItem}
        keyExtractor={(item: animalType) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: "2%",
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  informations: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: "5%",
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
  },
  name: {
    paddingLeft: 10,
    fontSize: 25,
  },
  age: {
    paddingLeft: 10,
  },
});
