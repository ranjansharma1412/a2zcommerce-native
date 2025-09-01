import React from "react";
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useInputFieldStyles } from "./InputFieldStyle";

interface InputFieldProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  style,
  containerStyle,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const styles = useInputFieldStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && <View>{leftIcon}</View>}
      <TextInput
        style={[styles.input,style]}
        placeholderTextColor="#777"
        {...props}
      />
      {rightIcon && <View>{rightIcon}</View>}
    </View>
  );
};

export default InputField;
