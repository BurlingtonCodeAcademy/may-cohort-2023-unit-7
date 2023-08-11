import React from 'react'
import Signup from './signup/Signup'
import { Col, Container, Row } from 'reactstrap';

function Auth() {
    return (
        <>
            <Container>
                <Row>
                    <Col md="6">
                        <Signup />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Auth