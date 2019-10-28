// @flow
import * as React from "react";
import { Route, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ENV } from "Config";
import getRoutes from "Routes";

import Environment from "Components/Utilities/Environment";
import { Main } from "./styles";

class App extends React.Component<Props> {
  render() {
    return (
      <>
        <Helmet>
          <title>MyApp</title>
        </Helmet>
        <Main>
          {getRoutes().map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Main>
        <Environment env={ENV} />
      </>
    );
  }
}

export default withRouter(App);
