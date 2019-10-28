// @flow
import React from "react";

import { storiesOf } from "@storybook/react";

import Link from "Components/Link";

const stories = storiesOf("Link", module);

stories.add("Base", () => <Link to="#">Go here!</Link>);
