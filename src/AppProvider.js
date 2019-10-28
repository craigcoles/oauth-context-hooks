// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "Hooks/useAuth";
import Theme from "Styles/Theme";
import App from "Components/App";

export default class AppProvider extends Component {
  render(): React.Node {
    return (
      <AuthProvider>
        <ThemeProvider theme={Theme}>
          <Router>
            <Switch>
              <App />
            </Switch>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    );
  }
}
