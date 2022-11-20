import React from 'react';
import { Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import ico from '../../assets/ico.png';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
}).required();

export default Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    const { email, password } = data;
    if (email === 'user@exemplo.com.br' && password === '123456') {
      navigation.navigate('Home');
    }
  };

  const navigation = useNavigation();


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
              style={[
                Styles.formInput, {
                  borderBottomColor: errors.email ? 'red' : '#8bb3bf',
                  borderBottomWidth: errors.email ? 2 : 1
                }
              ]}
              placeholder='Digite seu email'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={{ color: 'red' }}>This is required.</Text>}
        <Text style={Styles.formText}>SENHA</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                Styles.formInput, {
                  borderBottomColor: errors.password ? 'red' : '#8bb3bf',
                  borderBottomWidth: errors.password ? 2 : 1
                }
              ]}
              placeholder='Digite sua senha'
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={true}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={{ color: 'red' }}>This is required.</Text>}

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

