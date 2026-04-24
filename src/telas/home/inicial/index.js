import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import homeStyles from '../stylesHome';

export default function Inicial({ navigation }) {
  return (
    <SafeAreaView style={homeStyles.safe}>
      <ScrollView contentContainerStyle={homeStyles.container}>
        <View style={homeStyles.header}>
          <Image source={require('../../../../assets/logo.png')} style={homeStyles.logo} />
          <Text style={homeStyles.title}>MedSync</Text>
          <Text style={homeStyles.subtitle}>
            Sistema responsivo para agilizar o preenchimento de laudos hospitalares pelo médico.
          </Text>
        </View>

        <View style={homeStyles.card}>
          <Text style={homeStyles.cardTitle}>Laudos direto no celular</Text>
          <Text style={homeStyles.cardText}>
            O médico acessa os pacientes pendentes, consulta dados essenciais e preenche o laudo com mais praticidade.
          </Text>
        </View>

        <View style={homeStyles.card}>
          <Text style={homeStyles.cardTitle}>Fluxo pensado para o SUS</Text>
          <Text style={homeStyles.cardText}>
            A proposta reduz atrasos no faturamento causados pela ausência de documentos obrigatórios.
          </Text>
        </View>

        <View style={homeStyles.buttonArea}>
          <TouchableOpacity style={homeStyles.buttonPrimary} onPress={() => navigation.navigate('Login')}>
            <Text style={homeStyles.buttonPrimaryText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.buttonSecondary} onPress={() => navigation.navigate('Funcionalidades')}>
            <Text style={homeStyles.buttonSecondaryText}>CONHECER FUNCIONALIDADES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.buttonSecondary} onPress={() => navigation.navigate('Sobre')}>
            <Text style={homeStyles.buttonSecondaryText}>SOBRE O PROJETO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.buttonSecondary} onPress={() => navigation.navigate('Contato')}>
            <Text style={homeStyles.buttonSecondaryText}>CONTATO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
