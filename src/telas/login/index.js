import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleLogin() {
    setErro('');

    if (!email || !senha) {
      setErro('Preencha e-mail e senha.');
      return;
    }

    navigation.replace('MyTabs');
  }

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Inicial')}>
          <Ionicons name="home-outline" size={18} color="#253B49" />
          <Text style={styles.backText}>PÁGINA INICIAL</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo} />

          <View style={styles.inputBox}>
            <Ionicons name="person-outline" size={22} color="#686565" />
            <TextInput
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholderTextColor="#686565"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={22} color="#686565" />
            <TextInput
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#686565"
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgotText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
