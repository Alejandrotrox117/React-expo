// src/App.js
import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal } from 'react-native';
import UserTable from '@/components/registro/UserTable';
import UserForm from '@/components/registro/UsuarioForm';
import useUsers from '@/hooks/useUsers';

export default function App() {
  const { users, addUser } = useUsers();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Registrar Usuario" onPress={() => setModalVisible(true)} />
      <UserTable users={users} />
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <UserForm
            onRegisterUser={addUser}
            onClose={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

