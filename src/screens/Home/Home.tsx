import { Text, View } from 'react-native';
import api from '../../services/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types';
import axios from 'axios';

export interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}


export default function Home({ navigation }: HomeProps) {
  // comando para rodar o servidor json-server db.json --routes routes.json
  async function getCategories() {
    try {
      const response = await axios.get('http://localhost:3000/categories');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  getCategories();
  return (
    <View>
      <Text>Ola</Text>
    </View>
  );
}
