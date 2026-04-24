import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

export default function Paciente({ navigation, route }) {
  const paciente = route.params?.paciente || {
    nome: 'JOAO MARCOS DE FRANCA SANTOS',
    tipo: 'SUS',
    setor: 'Ala SUS Masculino - Apart. 55',
  };

  const dadosPaciente = [
    { label: 'Número do atendimento', value: '25500000235689' },
    { label: 'Tipo', value: 'Internação' },
    { label: 'Convênio', value: paciente.tipo },
    { label: 'Ala', value: 'Ala SUS Masculino' },
    { label: 'Apartamento', value: 'Apart. 55' },
    { label: 'Admissão', value: '01/01/2025' },
    { label: 'Alta', value: '13/01/2025' },
    { label: 'Médico Responsável', value: 'Luis Alberto Andrade Bueno' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.patientName}>{paciente.nome}</Text>
          <Text style={styles.meta}>Masculino • 22 anos • {paciente.tipo}</Text>
        </View>

        <View style={styles.card}>
          {dadosPaciente.map((item) => (
            <View style={styles.detailRow} key={item.label}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Laudo', { paciente })}>
          <Text style={styles.buttonText}>PREENCHER LAUDO</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
