import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function EsqueciSenha3() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    if (!email.trim()) {
      Alert.alert("Campo obrigatório", "Por favor, informe seu e-mail.");
      return;
    }

    Alert.alert("Enviado", `Código de recuperação enviado para ${email}`);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.card}>
        <Text style={styles.title}>TELA ESQUECI MINHA SENHA 3</Text>

        <Text style={styles.label}>Informe seu e-mail cadastrado</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="digite seu e-mail"
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
