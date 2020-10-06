import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CTAEmail } from '../CTAEmail';
import {Button} from '../Button';

const ModalExample = (props) => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Pré-inscrição - <b>{props.city}</b></ModalHeader>
        <ModalBody>
          <CTAEmail subtitle="Inscreva-se para ser avisado quando o match com candidatos(as) estará disponível!" city={props.city} state={props.state}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primaryColor" onClick={toggle}>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
