import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, Modal, TouchableOpacity, TextInput } from 'react-native';

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [firstName, setFirstName] = useState('Juan');
  const [lastName, setLastName] = useState('Pérez');
  const [idNumber, setIdNumber] = useState('12345678');
  const [email, setEmail] = useState('juan.perez@example.com');
  const [modalVisible, setModalVisible] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}></View>
        <Text style={styles.name}>{firstName} {lastName}</Text>
        <Text style={styles.contact}>{email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información del Perfil</Text>
        <Text style={styles.info}>Nombres: {firstName}</Text>
        <Text style={styles.info}>Apellidos: {lastName}</Text>
        <Text style={styles.info}>Cédula: {idNumber}</Text>
        <Text style={styles.info}>Correo: {email}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <Switch
            onValueChange={toggleNotifications}
            value={notificationsEnabled}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Language</Text>
          <Text style={styles.sectionContent}>English</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Theme</Text>
          <Text style={styles.sectionContent}>Light mode</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Help & Support</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact us</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy policy</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Editar Información del Perfil</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombres"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellidos"
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Cédula"
              value={idNumber}
              onChangeText={setIdNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    alignItems: 'center',
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
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 14,
    color: '#888',
  },
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
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default ProfileScreen;

