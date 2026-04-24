import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Menu({ navigation }) {
  const laudosPendentes = [
    { nome: 'JOAO MARCOS DE FRANCA SANTOS', tipo: 'SUS', setor: 'Ala SUS Masculino - Apart. 55' },
    { nome: 'MARIA SILVA', tipo: 'SUS', setor: 'Ala SUS Feminino - Apart. 22' },
    { nome: 'CARLOS SOUZA', tipo: 'Convênio', setor: 'Ala C - Apart. 14' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Laudos Pendentes</Text>
        <Text style={styles.subtitle}>Selecione um paciente para consultar os dados e preencher o laudo.</Text>

        {laudosPendentes.map((paciente) => (
          <View style={styles.card} key={paciente.nome}>
            <View style={styles.rowBetween}>
              <Text style={styles.patientName}>{paciente.nome}</Text>
              <Text style={styles.badge}>{paciente.tipo}</Text>
            </View>

            <Text style={styles.meta}>{paciente.setor}</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Paciente', { paciente })}>
              <Text style={styles.buttonText}>ABRIR PACIENTE</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Favoritos')}>
          <Text style={styles.buttonSecondaryText}>VER LAUDOS FAVORITOS</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
