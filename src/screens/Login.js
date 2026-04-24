import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/global";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MedSync Login</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Medico")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}