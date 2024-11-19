import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type props = {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    secureTextEntry?: boolean;
    style: any;
    keyboardType?: string;
    autoCapitalize?: string;

}


const InputField = ({ placeholder, onChangeText, value, secureTextEntry ,style,keyboardType,autoCapitalize}:props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
     
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default InputField;