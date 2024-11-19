import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '@/components/usuario/UserContext';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileSection from '@/components/profile/ProfileSection';
import ProfileModal from '@/components/profile/ProfileModal';
import { HelpSupport, ContactUs, PrivacyPolicy } from '@/components/profile/helpTask';

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const userContext = useUser();
  const user = userContext?.user;
  const setUser = userContext?.setUser;
  const navigation = useNavigation();

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  if (!user) {
    return (
      <View style={styles.containerCard}>
        <ActivityIndicator size="large" color="#000000" />
        <Text style={styles.text}>¡Debes iniciar sesión para acceder a tu perfil!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader name={`${user.name.firstname} ${user.name.lastname}`} email={user.email} />
      <ProfileInfo user={user} />
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <ProfileSection title="Notificaciones">
          <Switch onValueChange={toggleNotifications} value={notificationsEnabled} />
        </ProfileSection>
        <ProfileSection title="Lenguaje">
          <Text style={styles.sectionContent}>Español</Text>
        </ProfileSection>
        <ProfileSection title="Seguridad">
          <Text style={styles.sectionContent}>Configuraciones de Seguridad</Text>
        </ProfileSection>
      </View>
      <HelpSupport />
      <ContactUs />
      <PrivacyPolicy />

      {setUser && (
        <ProfileModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          user={user}
          setUser={setUser}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    marginBottom: 5,
    color: '#fff',
    fontSize: 16,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  containerCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
