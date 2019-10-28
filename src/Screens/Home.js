// @flow
import * as React from "react";
import { Helmet } from "react-helmet";

import { useAuth } from "Hooks/useAuth";

import Layout from "Components/Layout";
import Button from "Components/Button";
import Link from "Components/Link";
import Text from "Components/Text";

type Props = {};

function Home({ navigation }: Props): React.Node {
  const { auth, login, logout } = useAuth();

  const payload = {
    username: "user@example.com",
    password: "doorkeeper",
    grant_type: "password",
  };

  const onClick = () => {
    return !auth.access_token ? login(payload) : logout();
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout.Center>
        <Text>Home</Text>

        <Button onClick={onClick}>
          {!auth.access_token ? "Login" : "Logout"}
        </Button>

        <Text>
          {!auth.access_token ? "You are not logged in." : "You are logged in."}
        </Text>
      </Layout.Center>
    </>
  );
}

export default Home;
