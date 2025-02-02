import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import DoorButton from "./DoorButton";
import AboutUsImage from "../../../assets/images/doors/AboutUs.svg";
import PlaygroundImage from "../../../assets/images/doors/Playground.svg";
import StoriesImage from "../../../assets/images/doors/Stories.svg";

export default {
  title: "Buttons/Door Button",
  component: DoorButton,
  argTypes: {
    image: {
      control: {
        type: "select",
        options: [AboutUsImage, PlaygroundImage, StoriesImage],
      },
    },
  },
};

const Template = (args) => (
  <Router>
    <DoorButton {...args} link="/" />
  </Router>
);

export const AboutUs = Template.bind({});
AboutUs.args = {
  label: "About Us",
  image: AboutUsImage,
};

export const Playground = Template.bind({});
Playground.args = {
  label: "Playground",
  image: PlaygroundImage,
};

export const Stories = Template.bind({});
Stories.args = {
  label: "Stories",
  image: StoriesImage,
};
