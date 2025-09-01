import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from "react-native";
import { useButtonStyles } from "./ButtonStyle";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  textStyle,
  children,
  ...props
}) => {
  const styles = useButtonStyles();

  const buttonStyle = children ? style : [styles.button, style];

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {children ? (
        children
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
