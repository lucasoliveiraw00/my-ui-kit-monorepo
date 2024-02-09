import "ts-node/register";
import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "UI Kit Native",
  slug: "ui-kit-native",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
};

export default config;
