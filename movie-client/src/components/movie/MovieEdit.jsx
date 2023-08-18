import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import FullButton from '../buttons/FullButton';

function MovieEdit(props) {

    const { id } = useParams();

    let ratings = [null, "G", "PG", "PG-13", "NC-17", "R"];

    let genre = [null,'Comedy','Drama','Action','Horror',"Thriller",'Family','Documentary'];

    const yearRange = () => {
        let years = [null]
        const thisYear = new Date().getFullYear();

        for (let i = thisYear; i >= 1892; i--) years.push(i);

        return (
            <>
                <Input type='select'>
                    {
                        years.map((year, index) => {
                            return <option key={index} value={year}>{year}</option>
                        })
                    }
                </Input>
            </>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <h1
                style={{textAlign: 'center', textDecoration: 'underline'}}
            >Edit Movie</h1>
            <Container>
                <Row>
                    <Col md='4'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aperiam ipsum. Quae eaque necessitatibus aliquid facere fugiat totam nostrum, expedita animi dolorum veritatis culpa repellendus reiciendis accusantium. Nisi, porro recusandae.</p>
                    </Col>
                    <Col md='8'>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input />
                            </FormGroup>
                            <FullButton>
                                <Button color='success'>Update</Button>
                            </FullButton>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieEdit