import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UserTable = ({ users }) => {
  return (
    <View style={styles.tableContainer}>
      <Text style={styles.title}>Lista de Usuarios</Text>
      <View style={styles.row}>
        <Text style={styles.headerCell}>Nombre</Text>
        <Text style={styles.headerCell}>Correo Electrónico</Text>
        <Text style={styles.headerCell}>Rol</Text>
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()} // Asegúrate de que los IDs sean únicos
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.email}</Text>
            <Text style={styles.cell}>{item.role || 'Sin asignar'}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyList}>No hay usuarios registrados.</Text>
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
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    backgroundColor: '#4682B4',
    color: 'white',
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    backgroundColor: '#FFF',
  },
  emptyList: {
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default UserTable;
