// @flow
import React from "react";

import { storiesOf } from "@storybook/react";

import Text from "Components/Text";

const stories = storiesOf("Text", module);

stories.add("base", () => <Text>Hello World!</Text>);
