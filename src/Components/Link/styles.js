// @flow
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const base = css`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  text-decoration: none;
  font-family: ${props => props.theme.fonts.family};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledLink = styled(Link)`
  ${base}
`;
