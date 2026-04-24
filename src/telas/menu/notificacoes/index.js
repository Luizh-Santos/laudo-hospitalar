import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from '../styles';

export default function Notificacoes() {
  const notificacoes = [
    'Você possui 3 laudos pendentes para preenchimento.',
    'Paciente JOAO MARCOS recebeu alta e aguarda laudo.',
    'Novo aviso do faturamento disponível.',
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Notificações</Text>
        <Text style={styles.subtitle}>Acompanhe pendências importantes da rotina médica.</Text>

        {notificacoes.map((item) => (
          <View style={styles.card} key={item}>
            <Text style={styles.meta}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
