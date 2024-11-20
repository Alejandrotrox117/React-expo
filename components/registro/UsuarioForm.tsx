import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import InputField from '@/components/form/input';
import useValidation from '@/hooks/validate';
import { useNavigation } from '@react-navigation/native';
import ButtonSubmit from '@/components/form/button';

const UserForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { errors, validate } = useValidation();
  const navigation = useNavigation();

  const handleSubmit = () => {
    const formData = { password };
    validate('firstname', name);
    validate('lastname', lastname);
    validate('id', id);
    validate('email', email);
    validate('password', password);
    validate('confirmPassword', confirmPassword, formData);

    if (!errors.firstname && !errors.lastname && !errors.id && !errors.email && !errors.password && !errors.confirmPassword) {
      alert('Registro exitoso');
      navigation.navigate('index');
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setLastname('');
    setId('');
    setEmail('');
    setRole('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Registrar Usuario</Text>
      <InputField
        style={[styles.input, errors.firstname && styles.inputError]}
        placeholder="Nombres"
        value={name}
        onChangeText={(text) => {
          setName(text);
          validate('firstname', text);
        }}
      />
      {errors.firstname && <Text style={styles.errorText}>{errors.firstname}</Text>}

      <InputField
        style={[styles.input, errors.lastname && styles.inputError]}
        placeholder="Apellidos"
        value={lastname}
        onChangeText={(text) => {
          setLastname(text);
          validate('lastname', text);
        }}
      />
      {errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text>}

      <InputField
        style={[styles.input, errors.id && styles.inputError]}
        placeholder="Cédula"
        value={id}
        onChangeText={(text) => {
          setId(text);
          validate('id', text);
        }}
        keyboardType="numeric"
      />
      {errors.id && <Text style={styles.errorText}>{errors.id}</Text>}

      <InputField
        style={[styles.input, errors.email && styles.inputError]}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validate('email', text);
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}


      <InputField
        style={[styles.input, errors.password && styles.inputError]}
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          validate('password', text);
        }}
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <InputField
        style={[styles.input, errors.confirmPassword && styles.inputError]}
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={(text) => {
          setConfirmPassword(text);
          validate('confirmPassword', text, { password });
        }}
        secureTextEntry
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}

      <ButtonSubmit
        title="Iniciar Sesión"
        onPress={handleSubmit}
        disabled={
          errors.firstname ||
          errors.lastname ||
          errors.id ||
          errors.email ||
          errors.password ||
          errors.confirmPassword
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    elevation: 5,
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#28a745',
  },
});

export default UserForm;
