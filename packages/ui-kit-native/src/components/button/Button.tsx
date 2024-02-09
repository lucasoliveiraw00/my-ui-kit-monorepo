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
  md: 10,
  lg: 15,
  xl: 20,
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
          paddingVertical: handleSize(),
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
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
});
