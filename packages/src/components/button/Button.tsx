import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export type ButtonProps = {
  onPress: () => void;
  text: string;
  type?: "primary" | "secondary" | "info";
  size?: "md" | "lg" | "xl";
};

const backgroundColor = {
  primary: "purple",
  secondary: "black",
  info: "blue",
};

const size = {
  md: 32,
  lg: 40,
  xl: 55,
};

export const Button = (props: ButtonProps) => {
  function handleColor() {
    return backgroundColor?.[props.type!] ?? backgroundColor.primary;
  }

  function handleSize() {
    return size?.[props.size!] ?? size.md;
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: handleColor(),
          paddingHorizontal: handleSize(),
        },
      ]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props?.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    borderRadius: 8,
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
});
