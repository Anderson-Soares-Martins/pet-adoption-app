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
import { api } from "../../services/api";

enum Direction {
  Dog = 1,
  cat = 2,
  bird = 3,
  fish = 4,
  rodent = 5,
  rabbit = 6,
}

interface animalType {
  id: number;
  name: string;
  categoryId: number;
  age: number;
  img: string;
}

interface Props {
  currentCategory: number;
  onSelect: (id: number) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
      props.setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getAnimal();
  }, []);

  const icons = (categoryId: number) => {
    switch (categoryId) {
      case Direction.Dog:
        return mdiDog;
      case Direction.cat:
        return mdiCat;
      case Direction.bird:
        return mdiBird;
      case Direction.fish:
        return mdiFish;
      case Direction.rodent:
        return mdiRodent;
      case Direction.rabbit:
        return mdiRabbit;
    }
  };

  const renderItem = ({ item }: { item: animalType }) => (
    <TouchableOpacity
      testID="Select-animal"
      style={styles.container}
      onPress={() => props.onSelect(item.id)}
    >
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
        testID="Flatlist-test"
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
