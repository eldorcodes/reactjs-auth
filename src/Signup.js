import React, { Component, useCallback } from 'react';
import {withRouter} from 'react-router';
import app from './base';

const Signup = ({history}) => {
    const handleSignup = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements;
        try {
            await app.auth()
            .createUserWithEmailAndPassword(email.value,password.value)
            history.push("/")
        } catch (error) {
            console.log(error)
            alert(error)
        }
    },[history])

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignup}>
                <label for="email">
                    Email 
                    <input type="email" name="email" placeholder="Type email" />
                </label>
                <label for="password">
                    Password 
                    <input type="password" name="password" placeholder="Type password" />
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default withRouter(Signup);