import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Dimensions } from 'react-native';
import InputField from '@/components/form/input';
import InputLabel from '@/components/form/InputLabel';
import useValidation from '@/hooks/validate';


type props = {
  name: {
    firstname: string;
    lastname: string;
  };
  id: number;
  email: string;
  visible: boolean;
  onClose: () => void;
  user: props;
  setUser: (user: props) => void;
}
const { width, height } = Dimensions.get('window');
const ProfileModal: React.FC<props> = ({ visible, onClose, user, setUser }) => {
  const { errors, validate } = useValidation();
  const [formData, setFormData] = useState<props>(user);

  const handleChange = (name: keyof props | keyof props['name'], value: string) => {
    if (name === 'firstname' || name === 'lastname') {
      setFormData({ ...formData, name: { ...formData.name, [name]: value } });
      validate(name, value);
    }
  };

  const handleSave = () => {
    validate('firstname', formData.name.firstname);
    validate('lastname', formData.name.lastname);
    validate('id', formData.id.toString());
    validate('email', formData.email);

    if (!errors.firstname && !errors.lastname && !errors.id && !errors.email) {
      setUser(formData);
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Editar Información del Perfil</Text>
          
          <View style={styles.inputContainer}>
            <InputLabel title="Editar Nombres:" />
            <InputField
              placeholder="Nombres"
              value={formData.name.firstname}
              onChangeText={(text) => handleChange('firstname', text)}
            />
            {errors.firstname && <Text style={styles.errorText}>{errors.firstname}</Text>}
          </View>
          
          <View style={styles.inputContainer}>
            <InputLabel title="Editar Apellidos:" />
            <InputField
              placeholder="Apellidos"
              value={formData.name.lastname}
              onChangeText={(text) => handleChange('lastname', text)}
            />
            {errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text>}
          </View>
          
          <View style={styles.inputContainer}>
            <InputLabel title="Editar Cédula:" />
            <InputField
              placeholder="Cédula"
              value={formData.id.toString()}
              onChangeText={(text) => handleChange('id', text)}
            />
            {errors.id && <Text style={styles.errorText}>{errors.id}</Text>}
          </View>
          
          <View style={styles.inputContainer}>
            <InputLabel title="Editar Correo:" />
            <InputField
              placeholder="Correo"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>
        
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.closeButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: Math.min(width * 0.8, 400), // Máximo de 400px para pantallas grandes
    maxHeight: Math.min(height * 0.8, 600), // Máximo de 600px para pantallas grandes
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: Math.min(width * 0.05, 20), // Máximo de 20px para pantallas grandes
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  closeButton: {
    backgroundColor: '#ff0000',
  },
  buttonText: {
    color: '#fff',
    fontSize: Math.min(width * 0.04, 16), // Máximo de 16px
  },
  errorText: {
    color: 'red',
    fontSize: Math.min(width * 0.035, 14), // Máximo de 14px
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ProfileModal;