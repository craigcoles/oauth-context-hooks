// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "Styles/Theme";

export default class StoryProvider extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>{this.props.story}</Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
