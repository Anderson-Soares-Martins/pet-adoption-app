import { Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Styles from './styles';
import { useForm, Controller } from "react-hook-form";
import * as Animatable from 'react-native-animatable';
import { yupResolver } from '@hookform/resolvers/yup';
import ico from '../../assets/ico.png';
import TextInput from '../../components/TextInput';

import { useNavigation } from '@react-navigation/native';

import * as yup from "yup";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';


const schema = yup.object({
  email: yup.string().required('digite algum email').email('verique seu email'),
  password: yup.string().required('senha é obrigatório').min(6, 'senha deve conter 6 caracteres'),
}).required();

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  type dataForm = {
    email: string,
    password: string
  }

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSubmit = (data: dataForm) => {
    const { email, password } = data;
    if (email === 'user@exemplo.com.br' && password === '123456') {
      navigation.navigate('Home');
    }
  }

  return (
    <KeyboardAvoidingView
      style={Styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Animatable.View style={Styles.header} animation='fadeInLeft'>
        <Image source={ico} style={Styles.logo} />
        <Text style={Styles.message}>LOGIN</Text>
        <Text style={Styles.subMessage}>Insira seus dados para continuar</Text>
      </Animatable.View>

      <Animatable.View style={Styles.form} animation='fadeInUp'>
        <Text style={Styles.formText}>EMAIL</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={Styles.formInput}
              placeholder='Digite seu email'
              errors={errors.email}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        <Text style={Styles.formText}>SENHA</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={Styles.formInput}
              errors={errors.password}
              placeholder='Digite sua senha'
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={true}
              value={value}
            />
          )}
          name="password"
        />

        <TouchableOpacity style={Styles.button} onPress={handleSubmit(onSubmit)} >
          <Text style={Styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.registerButton}>
          <Text style={Styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
}
