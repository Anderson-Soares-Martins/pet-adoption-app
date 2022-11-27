import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { mdiChevronDown } from "@mdi/js";
import api from "../../services/api";

interface categoriesType {
  id: number;
  img: string;
  name: string;
}

interface Props {
  currentCategory: number;
  setSelectedCategory: React.Dispatch<React.SetStateAction<number>>;
}

export default function Picker(props: Props) {
  const [txtOptins, setTxtOptions] = React.useState<string>("Todos");
  const [categories, setCategories] = React.useState<categoriesType[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    getCategories();
  }, []);

  const defaultAllOption = {
    id: 0,
    name: "Todos",
    img: "",
  };

  async function getCategories() {
    try {
      const response = await api.get("/categories");
      setCategories([defaultAllOption, ...response.data]);
    } catch (error) {
      console.log("deu erro mesmo");
      console.log(error);
    }
  }

  const renderItem = ({ item }: { item: categoriesType }) => (
    <TouchableOpacity
      style={styles.options}
      onPress={() => {
        setTxtOptions(item.name);
        setModalVisible(false);
        props.setSelectedCategory(item.id);
      }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.text}>{txtOptins}</Text>
        <Svg width="28" height="28" viewBox="0 0 25 25">
          <Path d={mdiChevronDown} fill="white" />
        </Svg>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <View style={styles.modal}>
            <FlatList
              data={categories}
              renderItem={renderItem}
              keyExtractor={(item: categoriesType) => item.name}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "35%",
    height: 44,
    backgroundColor: "#dcad36",
    elevation: 8,
    borderRadius: 30,
    paddingHorizontal: 16,
    marginBottom: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 8,
    marginTop: "60%",
    marginHorizontal: 100,
    height: 300,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f4f4",
    borderRadius: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 3,
    padding: 10,
  },
});
