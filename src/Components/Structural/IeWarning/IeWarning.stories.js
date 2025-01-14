import React from "react";
import IeWarning from "./IeWarning";

export default {
  title: "Structural/IeWarning",
  component: IeWarning,
  argTypes: {},
};

const Template = (args) => <IeWarning {...args} />;

export const Default = Template.bind({});
Default.args = {};
