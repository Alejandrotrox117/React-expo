import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
};

const InputLabel = ({ title }: Props) => {
  return <Text style={styles.label}>{title}</Text>;
};

const styles = StyleSheet.create({
  label: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
});

export default InputLabel;