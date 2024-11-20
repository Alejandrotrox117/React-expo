import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '@/components/usuario/UserContext';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileSection from '@/components/profile/ProfileSection';
import ProfileModal from '@/components/profile/ProfileModal';
import { HelpSupport, ContactUs, PrivacyPolicy } from '@/components/profile/helpTask';
import { useColorScheme } from 'react-native'; // Importar useColorScheme

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const userContext = useUser();
  const user = userContext?.user;
  const setUser = userContext?.setUser;
  const navigation = useNavigation();

  const colorScheme = useColorScheme(); // Detectar el esquema de color
  const isDarkMode = colorScheme === 'dark'; // Validar si es modo oscuro

  // Estilos dinámicos
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: isDarkMode ? '#000' : '#f5f5f5',
    },
    text: {
      marginTop: 10,
      fontSize: 16,
      textAlign: 'center',
      color: isDarkMode ? '#fff' : '#000',
    },
    button: {
      backgroundColor: isDarkMode ? '#1E90FF' : '#007bff',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      marginBottom: 5,
      color: isDarkMode ? '#000' : '#fff',
      fontSize: 16,
    },
    sectionContent: {
      fontSize: 16,
      color: isDarkMode ? '#ccc' : '#555',
    },
    containerCard: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
  });

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  if (!user) {
    return (
      <View style={dynamicStyles.containerCard}>
        <ActivityIndicator size="large" color={isDarkMode ? '#fff' : '#000'} />
        <Text style={dynamicStyles.text}>¡Debes iniciar sesión para acceder a tu perfil!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={dynamicStyles.container}>
      <ProfileHeader name={`${user.name.firstname} ${user.name.lastname}`} email={user.email} />
      <ProfileInfo user={user} />
      <TouchableOpacity style={dynamicStyles.button} onPress={() => setModalVisible(true)}>
        <Text style={dynamicStyles.buttonText}>Editar</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <ProfileSection title="Notificaciones">
          <Switch onValueChange={toggleNotifications} value={notificationsEnabled} />
        </ProfileSection>
        <ProfileSection title="Lenguaje">
          <Text style={dynamicStyles.sectionContent}>Español</Text>
        </ProfileSection>
        <ProfileSection title="Seguridad">
          <Text style={dynamicStyles.sectionContent}>Configuraciones de Seguridad</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20,
  },
});

export default ProfileScreen;
