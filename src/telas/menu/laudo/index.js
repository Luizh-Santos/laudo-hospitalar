import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

export default function Laudo({ route }) {
  const paciente = route.params?.paciente || { nome: 'JOAO MARCOS DE FRANCA SANTOS' };
  const [texto, setTexto] = useState('');

  function salvarLaudo() {
    if (!texto.trim()) {
      Alert.alert('Atenção', 'Preencha as informações do laudo antes de salvar.');
      return;
    }

    Alert.alert('Sucesso', 'Laudo salvo com sucesso.');
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.label}>Paciente</Text>
          <Text style={styles.patientName}>{paciente.nome}</Text>
          <Text style={styles.meta}>Informe a justificativa e os dados necessários para o faturamento.</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite as informações do laudo..."
          multiline
          value={texto}
          onChangeText={setTexto}
        />

        <TouchableOpacity style={styles.button} onPress={salvarLaudo}>
          <Text style={styles.buttonText}>SALVAR LAUDO</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
