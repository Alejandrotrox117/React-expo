import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '@/components/form/input';
import ButtonSubmit from '@/components/form/button';
import useValidation from '@/hooks/validate';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { errors, validate } = useValidation(); 

  const handleLogin = () => {
    validate('email', email);
    validate('password', password);
    
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <InputField
        placeholder="Correo Electrónico"
        onChangeText={(value) => {
          setEmail(value);
          validate('email', value);
        }}
        value={email}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      
      <InputField
        placeholder="Contraseña"
        onChangeText={(value) => {
          setPassword(value);
          validate('password', value);
        }}
        value={password}
        secureTextEntry
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      
      <ButtonSubmit title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;