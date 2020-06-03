import React, { useState } from 'react'

import { Container, Row, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

import { Button } from '../components/Button'
import { isEmailValid, isRequiredField } from '../utils/helper'

const validators = (name, value, errors) => {
  const required = isRequiredField(value)
  switch(name) {
    case 'email':
      if(required) {
        return {...errors, email: required}
      }
      
      if(!isEmailValid(value)) {
        return {...errors, email: 'Digita um e-mail válido'}
      }

      delete errors.email

    case 'cidade':
      if(required) {
        return {...errors, cidade: required}
      }

      delete errors.cidade

    default:
      return errors;
  }
}

export const CTAEmail = ({ title }) => {
  const [diry, setDirty] = useState(false);
  const [errors, setErrors] = useState({});
  const [contactInfo, setContactInfo] = useState({
    email: '',
    cidade: '',
    preCandidato: false,
  });

  const setInfo = (el) => {
    const { name, value, type } = el.target

    if(diry) {
      const newErrors = validators(name, value, errors) || {[name]: ''}
      setErrors({...errors, ...newErrors})
    }

    const newValue = (type === 'checkbox') ? !contactInfo[name] : value
    setContactInfo({...contactInfo, [name]: newValue})
  }

  const submit = (event) => {
    event.preventDefault();

    const formErrors = Object
      .keys(contactInfo)
      .map(infoKey => validators(infoKey, contactInfo[infoKey], errors))
      .reduce((acc, erro) => ({...acc, ...erro}))

    setErrors(formErrors);
    if(formErrors) {
      setDirty(true);
    }

    if(Object.keys(formErrors).length === 0) {
      console.log(contactInfo)
    }
  }

  return (
    <Container>
      <Row>
        <Col lg={{ size: 8, offset: 2 }} className="text-center mt-5 mb-4">
          <h1>{title}</h1>
          <h2>Nosso projeto está crescendo e esse ano estaremos em 5 cidades!</h2>
        </Col>
        <Col lg={{ size: 10, offset: 1 }}>
          <Form onSubmit={submit}>
            <Row form>
              <Col lg="5">
                <FormGroup>
                  <Input invalid={!!errors.email} onChange={setInfo} type="mail" name="email" placeholder="Digite seu e-mail" />
                  {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Input invalid={!!errors.cidade} onChange={setInfo} type="select" name="cidade">
                    <option value="">Selecione sua cidade</option>
                    <option>Campina Grande</option>
                    <option>Campinas</option>
                    <option>João Pessoa</option>
                    <option>Porto Alegre</option>
                    <option>Recife</option>
                  </Input>
                  {errors.cidade && <FormFeedback>{errors.cidade}</FormFeedback>}
                </FormGroup>
              </Col>
              <Col lg="3">
                <Button block type="submit">Enviar</Button>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input name="preCandidato" type="checkbox" onChange={setInfo} value={contactInfo.preCandidato} className="mt-0" />{' '}
                    Sou pré-candidato e gostaria de receber mais informações
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}