// @flow
import styled from "styled-components";

import RNText from "Components/Text";

const envCheck = env => {
  switch (env) {
    case "staging":
      return "orange";
    case "edge":
      return "purple";
    case "production":
      return "red";
    default:
      return "green";
  }
};

export const Badge = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => envCheck(props.env)};
  position: absolute;
  right: 5px;
  bottom: 5px;
  display: grid;
  place-items: center;
  border-radius: 4px;
`;

export const Text = styled(RNText)`
  margin: 0;
  font-size: 12px;
  text-align: center;
  line-height: 1.08;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;
