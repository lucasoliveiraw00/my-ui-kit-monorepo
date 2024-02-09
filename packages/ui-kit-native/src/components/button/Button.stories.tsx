import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  args: {
    text: "Olá mundo",
    size: "md",
    type: "info",
  },
  argTypes: {
    onPress: { action: "Pressionou o botão" },
    text: {
      name: "Text",
      control: {
        type: "text",
      },
    },
    size: {
      name: "Tamanho",
      control: {
        type: "select",
      },
      options: ["md", "lg", "xl"],
    },
    type: {
      name: "Tipo",
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "info"],
    },
  },
  parameters: {
    notes: `
# Button

Este é um componente de botão.
Utiliza-o desta forma:

\`\`\`tsx    
<Button 
      text="Olá mundo!" 
      onPress={() => console.log('pressed')} 
/>
\`\`\`
`,
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Basic: Story = {};
