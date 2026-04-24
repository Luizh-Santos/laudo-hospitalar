import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../menu/styles';

export default function Configuracoes() {
  const opcoes = [
    { titulo: 'Meu perfil', icon: 'person-outline' },
    { titulo: 'Segurança e acesso', icon: 'shield-checkmark-outline' },
    { titulo: 'Suporte', icon: 'headset-outline' },
    { titulo: 'Termos de uso e privacidade', icon: 'document-text-outline' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Configurações</Text>
        <Text style={styles.subtitle}>Ajustes principais da conta médica.</Text>

        {opcoes.map((opcao) => (
          <View style={styles.card} key={opcao.titulo}>
            <View style={styles.rowBetween}>
              <Text style={styles.patientName}>{opcao.titulo}</Text>
              <Ionicons name={opcao.icon} size={24} color="#03989E" />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
