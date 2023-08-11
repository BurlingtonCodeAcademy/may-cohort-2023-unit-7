import React, { useState, useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function Signup() {

    // const [ firstName, setFirstName ] = useState('');
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

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
            console.log(data); // coming back from Database

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <h2>Signup</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input 
                        // value={firstName}
                        // onChange={e => setFirstName(e.target.value)}
                        innerRef={firstNameRef}
                        placeholder='your first name here'
                    />
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
                <Button type='submit'>Signup</Button>
            </Form>
        </>
    )
}

export default Signup