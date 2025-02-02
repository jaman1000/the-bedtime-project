import React from "react";
import Snow from "./Snow";

export default {
  title: "Background/Snow",
  component: Snow,
  argTypes: {},
};

const Template = (args) => <Snow {...args} />;

export const Default = Template.bind({});
Default.args = {};
