// @flow
import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import StoryProvider from "./StoryProvider";

//=== Storybook settings
setOptions({
  name: "auth hook",
  url: "#",
  showDownPanel: true,
  downPanelInRight: false,
  sortStoriesByKind: true
});

//=== Decorators
addDecorator(story => <StoryProvider story={story()} />);

//=== Story loader
const req = require.context("../src", true, /story.[jt]sx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
