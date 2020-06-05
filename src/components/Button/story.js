import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};

export const primary = () => (
  <Button
    text={text("button text", "The panda's are all mine")}
    modifier={select(
      "modifier",
      { primary: "primary", secondary: "secondary" },
      "primary"
    )}
    clickHandler={action("Button was called")}
  />
);
