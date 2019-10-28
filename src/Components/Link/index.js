// @flow
import React from "react";
import { StyledLink } from "./styles";

const Link = (props: Props): React$Element<any> => (
  <StyledLink {...props}>{props.children}</StyledLink>
);

export default Link;
