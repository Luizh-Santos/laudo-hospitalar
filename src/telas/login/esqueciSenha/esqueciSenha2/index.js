import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function EsqueciSenha2() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    if (!email.trim()) {
      Alert.alert("Campo obrigatório", "Por favor, informe seu e-mail.");
      return;
    }

    // Aqui você pode substituir por lógica real de recuperação de senha.
    Alert.alert("Enviado", `Código de recuperação enviado para ${email}`);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Esqueci minha senha (2)</Text>

        <Text style={styles.label}>E-mail cadastrado</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="seu.email@exemplo.com"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSendCode}>
          <Text style={styles.buttonText}>Enviar código</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
