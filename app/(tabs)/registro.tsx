import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import ProductForm from '@/components/registro/ProductForm';
import ProductTable from '@/components/registro/ProductTable';
import useProducts from '@/hooks/product';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const { products, addProduct } = useProducts();

  const handleAddProduct = (product) => {
    addProduct(product);
    setModalVisible(false);  // Cerrar el modal después de agregar el producto
  };

  return (
    <View style={styles.container}>
      {/* Botón para abrir el modal */}
      <Button
        title="Registrar Producto"
        onPress={() => setModalVisible(true)}
      />

      {/* Tabla de productos */}
      <ProductTable products={products} />

      {/* Modal con formulario */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <ProductForm onAddProduct={handleAddProduct} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgb(0, 183, 255)',
    borderRadius: 20,
    padding: 10,
    elevation: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});