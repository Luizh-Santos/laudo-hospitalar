import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function Login() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>ENTRAR</Text>

      <View style={styles.card}>

        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />

        {/* Campo usuário */}
        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="#555" />
          <TextInput
            placeholder="Usuário"
            style={styles.input}
          />
        </View>

        {/* Campo senha */}
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#555" />
          <TextInput
            placeholder="Senha"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("MyTabs")}
        >
          <Text style={styles.textoBotao}>ENTRAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}