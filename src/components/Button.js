import React from 'react';
import styled from 'styled-components';

import { Button as BootButton } from 'reactstrap';

const getColor = ({ theme, color }) => {
  const colorOptions = Object.keys(theme);
  const themeColorKey = colorOptions.find(colorOption => colorOption === color);
  return themeColorKey ? theme[themeColorKey] : '';
}

const StyledButton = styled(BootButton)`
  background-color: ${getColor};
  transition: filter .2s;
  will-change: filter, color;
  color: ${props => props.light ? props.theme.darkGray : '#fff'};
  
  &:hover {
    color: ${props => props.light ? props.theme.darkGray : '#fff'};
    filter: brightness(0.9) contrast(1.2);
  }
`

export const Button = ({ color = 'primaryColor', children, ...props }) => (
  <StyledButton color={color} {...props}>{children}</StyledButton>
);