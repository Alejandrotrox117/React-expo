import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ProfileHeaderProps {
  name: string;
  email: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, email }) => {
  return (
    <View style={styles.profileHeader}>
      <Image source={require('@/assets/images/usuario.png')} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.contact}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 120,
    height: 120,
    borderRadius: 60,
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
});

export default ProfileHeader;