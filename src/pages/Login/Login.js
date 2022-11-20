import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import ico from '../../assets/ico.png';
import Styles from './styles';

export default Login = () => {
  return (
    <View style={Styles.container}>
      <Animatable.View style={Styles.header} animation='fadeInLeft'>
        <Image source={ico} style={Styles.logo} />
        <Text style={Styles.message}>LOGIN</Text>
        <Text style={Styles.subMessage}>Insira seus dados para continuar</Text>
      </Animatable.View>
      <Animatable.View style={Styles.form} animation='fadeInUp'>
        <Text style={Styles.formText}>EMAIL</Text>
        <TextInput placeholder='Seu e-mail' style={Styles.formInput} />
        <Text style={Styles.formText}>SENHA</Text>
        <TextInput placeholder='Sua senha' secureTextEntry={true} style={Styles.formInput} />
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.registerButton}>
          <Text style={Styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

