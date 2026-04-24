import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import homeStyles from '../stylesHome';

export default function Funcionalidades() {
  const itens = [
    'Listagem de laudos pendentes do médico.',
    'Consulta rápida aos dados do paciente.',
    'Preenchimento de laudos pelo celular.',
    'Notificações de pendências importantes.',
    'Área de configurações e suporte.',
  ];

  return (
    <SafeAreaView style={homeStyles.safe}>
      <ScrollView contentContainerStyle={homeStyles.container}>
        {itens.map((item, index) => (
          <View style={homeStyles.card} key={item}>
            <Text style={homeStyles.cardTitle}>0{index + 1}</Text>
            <Text style={homeStyles.cardText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
