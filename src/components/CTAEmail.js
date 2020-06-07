import React, { useState } from 'react'

import { Container, Row, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

import { Button } from '../components/Button'
import { isEmailValid, isRequiredField } from '../utils/helper'

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

export const CTAEmail = ({ title }) => {
  const [diry, setDirty] = useState(false);
  const [errors, setErrors] = useState({});
  const [contactInfo, setContactInfo] = useState({
    EMAIL: '',
    CIDADE: '',
    CANDIDATO: false,
  });

  const setInfo = (el) => {
    const { name, value, type } = el.target

    if (diry) {
      const newErrors = validators(name, value, errors) || { [name]: '' }
      setErrors({ ...errors, ...newErrors })
    }

    const newValue = (type === 'checkbox') ? !contactInfo[name] : value
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
        <Col lg={{ size: 8, offset: 2 }} className="text-center mt-5 mb-4">
          <h1>{title}</h1>
          <h2>Nosso projeto está crescendo e esse ano estaremos em 5 cidades!</h2>
        </Col>
        <Col lg={{ size: 10, offset: 1 }}>
          <Form target="_blank" method="POST" action="" onSubmit={submit}>
            <Row form>
              <Col lg="5">
                <FormGroup>
                  <Input invalid={!!errors.EMAIL} onChange={setInfo} type="mail" name="EMAIL" placeholder="Digite seu e-mail" />
                  {errors.EMAIL && <FormFeedback>{errors.email}</FormFeedback>}
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Input invalid={!!errors.CIDADE} onChange={setInfo} type="select" name="CIDADE">
                    <option value="">Selecione sua cidade</option>
                    <option>Campina Grande</option>
                    <option>Campinas</option>
                    <option>João Pessoa</option>
                    <option>Porto Alegre</option>
                    <option>Recife</option>
                  </Input>
                  {errors.CIDADE && <FormFeedback>{errors.CIDADE}</FormFeedback>}
                </FormGroup>
              </Col>
              <Col lg="3">
                <Button block name="subscribe" type="submit">Enviar</Button>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input name="CANDIDATO" type="checkbox" onChange={setInfo} className="mt-0" />{' '}
                    Sou pré-candidato e gostaria de receber mais informações
                  </Label>
                </FormGroup>
                <Input type="hidden" name="b_6f198f953b0c34ee391e4e8bf_e7126f8c48" tabIndex="-1" value="" />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}