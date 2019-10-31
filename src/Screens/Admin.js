// @flow
import * as React from "react";
import { Helmet } from "react-helmet";

import Layout from "Components/Layout";
import Text from "Components/Text";

type Props = {};

function Admin({ navigation }: Props): React.Node {
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <Layout.Center>
        <Text>Admin</Text>
      </Layout.Center>
    </>
  );
}

export default Admin;
