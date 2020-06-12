import React from 'react';
import styled from 'styled-components';

import { Button as BootButton } from 'reactstrap';

import { getColor } from '../utils/styles'

const StyledButton = styled(BootButton)`
  background-color: ${getColor};
  transition: filter .2s;
  will-change: filter, color;
  color: ${props => props.light ? props.theme.darkGray : '#fff'};
  border-radius: 10px;
  
  &:hover {
    color: ${props => props.light ? props.theme.darkGray : '#fff'};
    filter: brightness(0.9) contrast(1.2);
  }
`

export const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);