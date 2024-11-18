import React from "react";
import { Button } from "react-native";

type Props = {
  onPress: () => void;
  title: string;
};

const SubmitButton = ({ onPress, title }: Props) => {
  return <Button title={title} onPress={onPress} />;
};

export default SubmitButton;
