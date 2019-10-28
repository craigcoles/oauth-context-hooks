// @flow
import styled from "styled-components";

export const CenterView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CenterItem = styled.div``;

export const PaddedView = styled.div`
  padding-top: ${props => props.theme.spacing * props.scale}rem;
  padding-right: ${props => props.theme.spacing * props.scale}rem;
  padding-bottom: ${props => props.theme.spacing * props.scale}rem;
  padding-left: ${props => props.theme.spacing * props.scale}rem;
`;
