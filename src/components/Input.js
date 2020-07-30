import React from 'react'
import styled from 'styled-components'

import { Input as ReactstrapInput, FormGroup, FormFeedback } from 'reactstrap'

const StyledInput = styled(ReactstrapInput)`
  border-radius: 10px;
  border: 1px solid lightgray;
  font-size: 16px;
  appearance: none;

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
