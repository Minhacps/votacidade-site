import React from 'react'
import { Col } from 'reactstrap';

import Card from './Card';
import { Link } from './Link';
import { Button } from './Button';

const CidadesCard = (cidade, index, cidades) => {
    const isFirst = index === 0;
    const isLast = index === cidades.length - 1;
    const padding = isFirst ? 'pr-1' :
        isLast ? 'pl-1' : 'px-1'

    return (
        <Col key={cidade.title} className={`${padding} mt-2`}>
            <Link tag="a" href={cidade.linkTo}>
                <Card
                    title={cidade.title}
                    image={cidade.image}
                    linkTo={cidade.linkTo}
                >
                    <Button color="transparent" style={{ fontWeight: 800 }}>APOIE!</Button>
                </Card>
            </Link>
        </Col>
    )
}

export default CidadesCard
