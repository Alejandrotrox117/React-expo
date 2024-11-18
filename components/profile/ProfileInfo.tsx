import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface User {
  name: {
    firstname: string;
    lastname: string;
  };
  id: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    number: string;
    zipcode: string;
  };
}

const ProfileInfo = ({ user }: { user: User }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Información del Perfil</Text>
      <Text style={styles.info}>Nombres: {user.name.firstname}</Text>
      <Text style={styles.info}>Apellidos: {user.name.lastname}</Text>
      <Text style={styles.info}>Cédula: {user.id}</Text>
      <Text style={styles.info}>Correo: {user.email}</Text>
    </View>
  );
};

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
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export default ProfileInfo;