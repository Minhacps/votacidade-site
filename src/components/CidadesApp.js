import React, { useState } from 'react'
import { Col } from 'reactstrap';
import Modal from '../components/Modal/Modal';

import Card from './Card';
import { Link } from './Link';

const CidadesApp = (cidade, index, cidades) => {
    const isFirst = index === 0;
    const isLast = index === cidades.length - 1;
    const padding = isFirst ? 'pr-1' :
        isLast ? 'pl-1' : 'px-1'

    const [activeModal, setActiveModal]= useState(false);
    const toggle = () => setActiveModal(!activeModal);

    return (
        <Col key={cidade.title} className={`${padding} mt-2`}>
            {activeModal ? <Modal city={cidade.title} /> : null}
            {cidade.enableApp ?
                <Link tag="a" href={cidade.appLink}>
                    <Card
                        title={cidade.title}
                        subTitle={'COMEÇAR!'}
                        image={cidade.imageApp}
                        appLink={cidade.appLink}
                        enableApp={cidade.enableApp}
                    >
                    </Card>
                </Link>
                :
                <Card
                    title={cidade.title}
                    subTitle={'PRÉ-INSCRIÇÃO'}
                    image={cidade.imageAppPB}
                    appLink={cidade.appLink}
                    onClick={toggle}
                    style={{cursor: 'pointer'}}
                >
                </Card>

            }

        </Col>
    )
}

export default CidadesApp
