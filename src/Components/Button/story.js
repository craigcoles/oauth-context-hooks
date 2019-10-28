// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "Components/Button";

const stories = storiesOf("Button", module);

stories.add("Base", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));
