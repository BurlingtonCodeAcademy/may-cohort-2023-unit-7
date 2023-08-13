import React, { useState, useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import FullButton from '../../buttons/FullButton';
import { useNavigate } from 'react-router-dom';

/* 
! Challenge
    - Set the Signup component to store our session token
    - After the user signs up, have the route navigate to the /movie endpoint to display our placeholder page.
*/


function Signup(props) {

    // const [ firstName, setFirstName ] = useState('');
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log('first name: ', firstNameRef.current.value)

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(firstName)

        let bodyObj = JSON.stringify({
            first: firstName,
            last: lastName,
            email: email,
            password: password
        })

        // console.log(bodyObj)

        const url = `http://localhost:4005/user/signup`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //* Settting our headers to accept the JSON object within the browser

        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        }

        try {

            const response = await fetch(url, requestOptions);
            const data = await response.json();
            // console.log(data); // coming back from Database

            if(data.message === "Success!") {
                props.updateToken(data.token)
                navigate('/movie');
            } else {
                alert(data.message)
            }

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <h2>Signup</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input
                        id='firstNameSignup'
                        // value={firstName}
                        // onChange={e => setFirstName(e.target.value)}
                        innerRef={firstNameRef}
                        placeholder='your first name here'
                        name='firstName'
                        type='text'

                    />
                    <Label for='firstNameSignup'>First Name</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                        innerRef={lastNameRef}
                        placeholder='your last name here'
                    />
                </FormGroup>
                <FormGroup>
                    <Label>email</Label>
                    <Input
                        innerRef={emailRef}
                        type='email'
                        placeholder='you@email.com'
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        innerRef={passwordRef}
                        type='password'
                    />
                </FormGroup>
                <FullButton>
                    <Button type='submit'>Signup</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default Signup