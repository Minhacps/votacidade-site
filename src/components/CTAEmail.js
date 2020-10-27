import React, { useState } from 'react'

import { Container, Row, Col, Form, FormGroup, Label } from 'reactstrap'

import { Button } from '../components/Button'
import { isEmailValid, isRequiredField } from '../utils/helper'
import { Title } from '../components/Title'
import { Input } from '../components/Input'

const validators = (name, value, errors) => {
  const required = isRequiredField(value)
  switch (name) {
    case 'EMAIL':
      if (required) {
        return { ...errors, EMAIL: required }
      }

      if (!isEmailValid(value)) {
        return { ...errors, EMAIL: 'Digita um e-mail válido' }
      }

      delete errors.EMAIL
      break;

    case 'CIDADE':
      if (required) {
        return { ...errors, CIDADE: required }
      }

      delete errors.CIDADE
      break;

    default:
      return errors;
  }
}

export const CTAEmail = ({ title, subtitle, city, state }) => {
  const [diry, setDirty] = useState(false);
  const [errors, setErrors] = useState({});
  const [contactInfo, setContactInfo] = useState({
    EMAIL: '',
    CIDADE: city + ' (' + state + ')',
    CANDIDATO: false,
  });

  const setInfo = (el) => {
    const { name, value, type } = el.target;

    if (diry) {
      const newErrors = validators(name, value, errors) || { [name]: '' }
      setErrors({ ...errors, ...newErrors })
    }

    const newValue = (type === 'checkbox') ? !contactInfo[name] : value;
    setContactInfo({ ...contactInfo, [name]: newValue })
  }

  const submit = (event) => {
    const formErrors = Object
      .keys(contactInfo)
      .map(infoKey => validators(infoKey, contactInfo[infoKey], errors))
      .reduce((acc, erro) => ({ ...acc, ...erro }))

    setErrors(formErrors);
    if (formErrors) {
      setDirty(true);
    }

    if (Object.keys(formErrors).length === 0) {
      return true
    }

    event.preventDefault();
  }

  return (
    <Container>
      <Row>
        <Col xs="12" className="text-center mt-5 mb-4">
          {title && <Title tag="h1" weight="800" size="2.5rem">{title}</Title>}
          {subtitle && <Title tag="h3" color="darkGray" className="h4">{subtitle}</Title>}
        </Col>
      </Row>

      <Row>
        <Col xs="auto" md="12">
          <Form target="_blank" method="POST" action="https://gmail.us10.list-manage.com/subscribe/post?u=145b9e413ba4cf4f138b21c21&amp;id=956113fd98" onSubmit={submit}>
            <FormGroup row className="justify-content-center">
              <Col lg={9}>
                <Label for="email" hidden>E-mail</Label>
                <Input
                  errors={errors}
                  invalid={!!errors.EMAIL}
                  onChange={setInfo}
                  type="mail"
                  name="EMAIL"
                  placeholder="Digite seu e-mail"
                  bsSize="lg"
                  id="email"
                />
              </Col>
           
              <Col>
                <Input
                  errors={errors}
                  invalid={!!errors.CIDADE}
                  value={city + ' (' + state + ')'}
                  onChange={setInfo}
                  type="text"
                  name="CIDADE"
                  bsSize="lg"
                  id="city"
                  style={{display:'none'}}
                />
              </Col>
              <Col lg={3}>
                <Button block light bold size="lg" color="secondaryColor" name="subscribe" type="submit">ENVIAR</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
