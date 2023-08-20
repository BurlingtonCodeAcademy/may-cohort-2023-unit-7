import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import FullButton from '../buttons/FullButton';
import {baseURL} from '../../environments';

/*
! Challenge
    - import useState within this component. - DONE
    - establish a state variable & function for the Title input.
        - The default value will be an empty string. - DONE
    - connect the input to detail the value of the current state. - DONE
    - establish an event listener to trigger the setState function for the 
    title input. 
    
    - Console log the state variable within the handleSubmit() function
*/

function MovieEdit(props) {

    
    const { id } = useParams();

    const url = `${baseURL}/movies/${id}`;
    
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [length, setLength] = useState('');
    const [released, setReleased] = useState('');

    const navigate = useNavigate();

    let ratings = [null, "G", "PG", "PG-13", "NC-17", "R"];

    let movieGenre = [null, 'Comedy', 'Drama', 'Action', 'Horror', "Thriller", 'Family', 'Documentary'];

    const yearRange = () => {
        let years = [null]
        const thisYear = new Date().getFullYear();

        for (let i = thisYear; i >= 1892; i--) years.push(i);

        return (
            <>
                <Input
                    value={released}
                    onChange={e => setReleased(e.target.value)}
                    type='select'>
                    {
                        years.map((year, index) => {
                            return <option key={index} value={year}>{year}</option>
                        })
                    }
                </Input>
            </>
        )
    }

    const fetchMovie = async () => {
        
        // console.log(props.token)
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: new Headers({
                    "Authorization": props.token
                })
            });

            const data = await res.json();

            console.log(data);
            const { title, genre, rating, length, releaseYear } = data.getMovie;
            
            setTitle(title);
            setGenre(genre);
            setRating(rating);
            setLength(length);
            setReleased(releaseYear);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        if(props.token) {
            fetchMovie();
        }
    }, [props.token])

    async function handleSubmit(e) {
        e.preventDefault();

        // console.log(title);
        let bodyObj = JSON.stringify({
        //  model: state value   
            title: title,
            genre: genre,
            rating: rating,
            length: length,
            releaseYear: released
        });

        const requestOptions = {
            headers: new Headers({
                "Authorization": props.token,
                "Content-Type": 'application/json'
            }),
            body: bodyObj,
            method: "PATCH"
        }
        
        try {
            
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            // console.log(data);
            alert(`${data.message}`)

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <h1
                style={{ textAlign: 'center', textDecoration: 'underline' }}
            >Edit Movie</h1>
            <Container>
                <Row>
                    <Col md='4'>
                        <p>
                            <b>{title}</b>
                            <br />
                            The {genre} movie rated {rating} that runs {length} minutes was released in {released}.
                        </p>
                        <FullButton>
                            <Button
                                color='info'
                                outline
                                onClick={() => navigate('/movie')}
                            >Back to Table</Button>
                        </FullButton>
                    </Col>
                    <Col md='8'>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Genre</Label>
                                <Input
                                    type='select'
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                >
                                    {
                                        movieGenre.map((g, i) => {
                                            return (
                                                <option key={i} value={g}>{g}</option>
                                            )
                                        })
                                    }
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Rating</Label>
                                <Input
                                    type='select'
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                >
                                    {
                                        ratings.map((r, i) =>
                                        (
                                            <option key={i} value={r}>{r}</option>
                                        )
                                        )
                                    }
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Length</Label>
                                <Input
                                    type='number'
                                    value={length}
                                    onChange={(e) => setLength(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Year Released</Label>
                                {yearRange()}
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

/* 
Two ways to return

    ratings.map((r,i) => (<option key={i} value={r}>{r}</option>))

    OR

    ratings.map((r,i) => {
        return(
            <option key={i} value={r}>{r}</option>
        )
    })
*/