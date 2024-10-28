import React from "react";
import { TouchableHighlight, Text, StyleSheet, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
  onPress?: () => void;
}

export function Button({ title, variant = "primary", style, ...rest }: Props) {
  const variantStyle = variant === "primary" ? styles.wrapperPrimary : styles.wrapperSecondary;
  const textColor = variant === "primary" ? "#fff" : "#550ab1";
  return (
    <TouchableHighlight
      style={[styles.wrapperCommon, variantStyle, style]}
      {...rest}
    >
      <Text style={[styles.title, { color: textColor }]}>
        {title}
      </Text>
    </TouchableHighlight>
  )
}

export const styles = StyleSheet.create({
  wrapperCommon: {
    width: 250,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperPrimary: {
    backgroundColor: "#550ab1",
  },
  wrapperSecondary: {
    borderColor: "#550ab1",
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
});
