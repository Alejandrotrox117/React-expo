import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProductTable = ({ products }) => {
  return (
    <View>
      <Text style={styles.title}>Lista de Productos</Text>
      <View style={styles.row}>
            <Text style={styles.cell1}>Nombre</Text>
            <Text style={styles.cell1}>Tipo</Text>
            <Text style={styles.cell1}>Precio</Text>
        </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
         
          <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.type}</Text>
            <Text style={styles.cell}>{item.price}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyList}>No hay productos registrados.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 2,              
    borderColor: '#000',         
    borderRadius: 8,             
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  cell1: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1, 
    borderColor: '#ddd', 
    padding: 10,
    backgroundColor: '#808080',
    color: 'white'
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1, // Define el ancho del borde
    borderColor: '#ddd', // Color del borde
    padding: 10, // Espaciado interno
  },
  emptyList: {
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default ProductTable;
