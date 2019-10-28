// @flow
import React from "react";
import { StyledButton } from "./styles";

const Button = (props: Props): React$Element<any> => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
