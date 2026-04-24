import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import homeStyles from '../stylesHome';

export default function Contato() {
  return (
    <SafeAreaView style={homeStyles.safe}>
      <ScrollView contentContainerStyle={homeStyles.container}>
        <View style={homeStyles.card}>
          <Text style={homeStyles.cardTitle}>Entre em contato</Text>
          <Text style={homeStyles.cardText}>
            Tem dúvidas sobre o sistema, deseja agendar uma demonstração ou falar com nossa equipe? Preencha os campos abaixo.
          </Text>
        </View>

        <View style={homeStyles.card}>
          <TextInput placeholder="Nome" style={{ borderBottomWidth: 1, borderColor: '#D1D5DB', paddingVertical: 12 }} />
          <TextInput placeholder="Empresa" style={{ borderBottomWidth: 1, borderColor: '#D1D5DB', paddingVertical: 12 }} />
          <TextInput placeholder="Telefone" style={{ borderBottomWidth: 1, borderColor: '#D1D5DB', paddingVertical: 12 }} keyboardType="phone-pad" />
          <TextInput placeholder="E-mail" style={{ borderBottomWidth: 1, borderColor: '#D1D5DB', paddingVertical: 12 }} keyboardType="email-address" />
          <TouchableOpacity style={[homeStyles.buttonPrimary, { marginTop: 18 }]}>
            <Text style={homeStyles.buttonPrimaryText}>ENVIAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
