import React from 'react';
import { TextInput, StyleSheet, useColorScheme } from 'react-native';

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  style?: any; 
  keyboardType?: string;
  autoCapitalize?: string;
};

const InputField = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  style,
  keyboardType,
  autoCapitalize,
}: Props) => {
  const colorScheme = useColorScheme(); 
  const isDarkMode = colorScheme === 'dark';

  // Estilos dinámicos
  const dynamicStyles = StyleSheet.create({
    input: {
      width: '100%',
      height: 40,
      borderColor: isDarkMode ? '#fff' : 'gray',
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });

  return (
    <TextInput
      style={[dynamicStyles.input, style]} 
      placeholder={placeholder}
      placeholderTextColor={isDarkMode ? '#ccc' : '#888'} 
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType as any}
      autoCapitalize={autoCapitalize as any}
    />
  );
};

export default InputField;
