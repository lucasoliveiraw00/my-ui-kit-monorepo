import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonProps, Button } from "./Button";

type Story = StoryObj<typeof Button>;

const StarterComponent = (props: ButtonProps) => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Button {...props} />
  </View>
);

const meta: Meta<typeof Button> = {
  title: "Button",
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {
    text: "Olá mundo",
  },
  parameters: {
    noBackground: true,
  },
} as Story;
