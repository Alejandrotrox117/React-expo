import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserForm from '@/components/registro/UsuarioForm';

export default function App() {
  return (
    <View style={styles.container}>
      <UserForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
});