import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.frame}>

        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />

        <View style={styles.inputBox}>
          <View style={styles.inputIcon} />
          <TextInput
            placeholder="Usuário"
            style={styles.inputField}
            placeholderTextColor="#686565"
          />
        </View>

        <View style={styles.inputBox2}>
          <View style={styles.inputIcon2} />
          <TextInput
            placeholder="Senha"
            secureTextEntry
            style={styles.inputField}
            placeholderTextColor="#686565"
          />
        </View>

        <TouchableOpacity style={styles.forgotArea} onPress={() => {}}>
          <Text style={styles.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MyTabs")}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
