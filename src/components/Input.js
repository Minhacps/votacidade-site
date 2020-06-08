import React from 'react'
import styled from 'styled-components'

import { Input as ReactstrapInput, FormGroup, FormFeedback } from 'reactstrap'

const StyledInput = styled(ReactstrapInput)`
  padding: 20px 10px;
  border-radius: 10px;
  border: 0;
  font-size: 16px;

  &:not(input), &::placeholder {
    color: #6E6E6E;
    font-style: italic;
  }
`

const selectStyle = (type) => (type === 'select') ? {
  borderRadius: '10px',
  overflow: 'hidden'
} : {}

export const Input = ({ name, errors, children, type, ...props }) => (
  <FormGroup style={selectStyle(type)}>
    <StyledInput type={type} name={name} {...props}>
      {children}
    </StyledInput>
    {errors && errors[name] && <FormFeedback>{errors[name]}</FormFeedback>}
  </FormGroup>
)
