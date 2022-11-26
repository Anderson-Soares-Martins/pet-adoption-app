import { View } from "react-native";
import api from "../../services/api";
import { Picker } from "@react-native-picker/picker";
import React from "react";

interface categoriesType {
  id: number;
  img: string;
  name: string;
}

interface Props {
  currentCategory: number;
  setSelectedCategory: React.Dispatch<React.SetStateAction<number>>;
}

export default function Select(props: Props) {
  const [categories, setCategories] = React.useState<categoriesType[]>([]);

  React.useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.log("deu erro mesmo");
      console.log(error);
    }
  }
  return (
    <Picker
      selectedValue={props.currentCategory}
      onValueChange={(itemValue, itemIndex) => {
        props.setSelectedCategory(itemValue);
      }}
    >
      <Picker.Item label="Todos" value={0} />
      {categories.map((category) => (
        <Picker.Item
          key={category.id}
          label={category.name}
          value={category.id}
        />
      ))}
    </Picker>
  );
}
