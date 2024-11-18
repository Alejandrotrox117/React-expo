import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}></View>
        <Text style={styles.name}>Puerto Rico</Text>
        <Text style={styles.contact}>youremail@domain.com | +01 234 567 89</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Edit profile information</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="ID Number"
          value={idNumber}
          onChangeText={setIdNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
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
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Help & Support</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact us</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy policy</Text>
      </View>
    </View>
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
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default ProfileScreen;
