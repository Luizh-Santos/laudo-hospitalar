import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/global";

export default function Configuracoes({ navigation }) {
  function sair() {
    navigation.replace("Login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <TouchableOpacity style={styles.button} onPress={sair}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}