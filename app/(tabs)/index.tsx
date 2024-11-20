import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import InputField from '@/components/form/input';
import ButtonSubmit from '@/components/form/button';
import useValidation from '@/hooks/validate';
import api from '@/services/api';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '@/components/usuario/UserContext';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, validate } = useValidation(); 
  const navigation = useNavigation();
  const userContext = useUser();
  const setUser = userContext ? userContext.setUser : () => {};
  const colorScheme = useColorScheme(); 
  
  const isDarkMode = colorScheme === 'dark';
  const dynamicStyles = StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    title: {
      ...styles.title,
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 12
    },
    
    
  });
  

  const handleLogin = async () => {
    validate('email', email);
    validate('password', password);

    if (!errors.email && !errors.password) {
      try {
        const response = await api.get('/users'); // Obtiene todos los usuarios del API
        if (response.status === 200) {
          const users = response.data;
          const user = users.find((u: { username: string; password: string }) => u.username === email && u.password === password);
          if (user) {
            setUser(user); // Almacena el usuario en el contexto
            alert('Éxito! Inicio de sesión exitoso');
            navigation.navigate('profile');// Redirige a la pantalla de perfil
          } else {
            alert('Error, Credenciales incorrectas');
          }
        } else {
          alert('Error, Error al obtener los usuarios');
        }
      } catch (error) {
        alert('Error, Ocurrió un error al obtener los datos');
      }
    }
  };
 
  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.title}>Inicio de Sesión</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Usuario"
            onChangeText={(value) => {
              setEmail(value);
              validate('username', value);
            }}
            value={email}
          />
          {errors.username && <Text style={styles.error}>{errors.username}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Contraseña"
            onChangeText={(value) => {
              setPassword(value);
              validate('password', value);
            }}
            value={password}
          />
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        </View>
      </View>
      <ButtonSubmit
        title="Iniciar Sesión"
        onPress={handleLogin}
        disabled={errors.email || errors.password}
      />
      <ExternalLink href="https://fakestoreapi.com/users">
        <ThemedText type="link">Ver Usuarios en API</ThemedText>
      </ExternalLink>
      <Text style={dynamicStyles.title}>Usuario predeterminado: johnd</Text>
      <Text style={dynamicStyles.title}>Usuario password: m38rmF$</Text>
    </View>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputsContainer: {
    width: '40%',
  },
  inputContainer: {
    marginBottom: 15,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  
});

export default LoginScreen;
