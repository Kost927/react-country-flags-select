// eslint-disable-next-line import/named
import { ComponentMeta } from "@storybook/react";

import { Us } from ".";

export default {
  title: "Flags",
  component: Us,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fontSize: {
      control: {
        type: "number",
      },
      defaultValue: 200,
      description: "The font size of the parent element",
    },
  },
} as ComponentMeta<typeof Us>;

const Template = (size: Record<string, number>) => (
  <span style={{ fontSize: `${size.fontSize}px` }}>
    <Us />
  </span>
);

export const Flag = Template.bind({});
