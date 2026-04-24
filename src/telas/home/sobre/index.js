import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import homeStyles from '../stylesHome';

export default function Sobre() {
  return (
    <SafeAreaView style={homeStyles.safe}>
      <ScrollView contentContainerStyle={homeStyles.container}>
        <View style={homeStyles.card}>
          <Text style={homeStyles.cardTitle}>Sobre o MedSync</Text>
          <Text style={homeStyles.cardText}>
            O MedSync nasceu para conectar a rotina hospitalar ao celular do médico, facilitando o preenchimento de laudos e diminuindo gargalos entre assistência médica e faturamento.
          </Text>
        </View>

        <View style={homeStyles.card}>
          <Text style={homeStyles.cardTitle}>Problema resolvido</Text>
          <Text style={homeStyles.cardText}>
            Quando o paciente recebe alta e o laudo obrigatório ainda não foi preenchido, a conta pode ficar parada. A versão mobile ajuda o médico a agir de forma rápida e organizada.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
