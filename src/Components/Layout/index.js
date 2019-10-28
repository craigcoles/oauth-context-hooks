// @flow
import React from "react";
import { CenterView, CenterItem, PaddedView } from "./styles";

type Props = {
  children: React.Node,
  style?: any,
};

function Center(props: Props): React$Element<any> {
  const { children, style } = props;

  return (
    <CenterView style={style}>
      <CenterItem>{children}</CenterItem>
    </CenterView>
  );
}

function Padded(props: Props): React$Element<any> {
  const { children, style, ...rest } = props;

  return (
    <PaddedView style={style} {...rest}>
      {children}
    </PaddedView>
  );
}

Padded.defaultProps = {
  scale: 1,
};

const Layout: Object = {
  Center,
  Padded,
};

export default Layout;
