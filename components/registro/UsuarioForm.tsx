import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import InputField from '@/components/form/input';
import ButtonSubmit from '@/components/form/button';
import useUserFormValidation from '@/hooks/validarFormulario';

const UserForm = ({ onRegisterUser, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { errors, validateForm, clearError } = useUserFormValidation();

  const handleSubmit = () => {
    const isValid = validateForm({ name, email, role, password, confirmPassword });
    if (!isValid) return;

    onRegisterUser({ name, email, role });
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setRole('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Registrar Usuario</Text>
      <InputField
        style={[styles.input, errors.name && styles.inputError]}
        placeholder="Nombre completo"
        value={name}
        onChangeText={(text) => {
          setName(text);
          clearError('name');
        }}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <InputField
        style={[styles.input, errors.email && styles.inputError]}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          clearError('email');
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <InputField
        style={[styles.input, errors.role && styles.inputError]}
        placeholder="Rol (e.g., Administrador)"
        value={role}
        onChangeText={(text) => {
          setRole(text);
          clearError('role');
        }}
      />
      {errors.role && <Text style={styles.errorText}>{errors.role}</Text>}

      <InputField
        style={[styles.input, errors.password && styles.inputError]}
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          clearError('password');
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
          clearError('confirmPassword');
        }}
        secureTextEntry
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    elevation: 5,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#ddd',
  },
  submitButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserForm;
