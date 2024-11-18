import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!name || !type || !price) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    const product = {
      name,
      type,
      price: `$${parseFloat(price).toFixed(2)}`,
    };

    onAddProduct(product);
    setName('');
    setType('');
    setPrice('');
  };

  return (
    <View style={styles.form}>
     <h1 style={styles.title}>Registro de Producto</h1>
      <TextInput
        style={styles.input}
        placeholder="Nombre del producto (e.g., iPhone 14)"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de producto (e.g., Teléfono, Tablet)"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio del producto (e.g., 799.99)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Button  title="Registrar Producto" onPress={handleSubmit} />
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    heading: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      fontSize: 30,
      fontWeight: '900',
      color: '#fff',
      backgroundColor: 'rgba(0, 183, 255, 0.8)', // Color de fondo para el encabezado
      padding: 10,
    },
    form: {
      width: '30%',
      backgroundColor: 'white', // Esto no se puede aplicar directamente en React Native, tendrás que usar un color de fondo sólido o una librería externa para gradientes
      height: 350,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    input: {
      padding: 10,
      height: 35,
      width: '50%',
      borderRadius: 5,
      backgroundColor: '#E0E7EC',
      marginBottom: 15,
    },
    button: {
      height: 35,
      marginTop: 30,
      backgroundColor: 'rgb(0, 183, 255)',
      color: '#fff',
      fontSize: 16,
    },
    title: {
      
        color: 'black',
        
      },
  });

export default ProductForm;
