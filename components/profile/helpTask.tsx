import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpSupport = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Ayuda y Soporte</Text>
  </View>
);

const ContactUs = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Contactanos</Text>
  </View>
);

const PrivacyPolicy = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Politicas de Privacidad</Text>
  </View>
);

const styles = StyleSheet.create({
    section: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
});

export { HelpSupport, ContactUs, PrivacyPolicy };