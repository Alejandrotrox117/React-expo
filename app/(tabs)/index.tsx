import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import InputField from '@/components/form/input';
import ButtonSubmit from '@/components/form/button';
import useValidation from '@/hooks/validate';
import api from '@/services/api';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '@/components/usuario/UserContext';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';

const LoginScreen = () => {
  const [username, setUsername] = useState(''); // Cambiado a username
  const [password, setPassword] = useState('');
  const { errors, validate } = useValidation(); 
  const navigation = useNavigation();
  const userContext = useUser();
  const setUser = userContext ? userContext.setUser : () => {};

  const handleLogin = async () => {
    validate('username', username);
    validate('password', password);

    if (!errors.username && !errors.password) {
      try {
        const response = await api.get('/users');
        if (response.status === 200) {
          const users = response.data;
          const user = users.find((u) => u.username === username && u.password === password);
          if (user) {
            setUser(user);
            alert('Éxito,Inicio de sesión exitoso');
            navigation.navigate('profile');
          } else {
            alert('Error,Credenciales incorrectas');
            setUsername(''); // Limpia el campo de username
            setPassword(''); // Limpia el campo de password
          }
        } else {
          alert('Error al obtener los usuarios');
        }
      } catch (error) {
        alert('Error, Ocurrió un error al obtener los datos');
      }
    } else {
      alert('Error,Por favor corrige los errores en el formulario');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Usuario"
            onChangeText={(value) => {
              setUsername(value);
              validate('username', value);
            }}
            value={username}
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
        disabled={errors.username || errors.password}
      />
      <ExternalLink href="https://fakestoreapi.com/users">
        <ThemedText type="link">Ver Usuarios en API</ThemedText>
      </ExternalLink>
      <Text>Usuario predeterminado: johnd</Text>
      <Text>Usuario password: m38rmF$</Text>
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
    backgroundColor: '#fff',
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