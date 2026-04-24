import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from '../styles';

export default function Favoritos() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Laudos Favoritos</Text>
        <View style={styles.card}>
          <Text style={styles.patientName}>Laudo de internação SUS</Text>
          <Text style={styles.meta}>Modelo favorito para agilizar o preenchimento de documentos recorrentes.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.patientName}>Laudo de prorrogação</Text>
          <Text style={styles.meta}>Base textual para casos em que o paciente precisa permanecer internado.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
