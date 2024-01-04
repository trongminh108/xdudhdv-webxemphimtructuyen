'use client';
import './signup.scss';

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Image from 'next/image';

function SignIn() {
    const [showPassword, setShowpassword] = useState<Boolean>(false);

    function handleShowpassword() {
        setShowpassword((prev) => !prev);
    }

    return (
        <Container className="sign-in-container" fluid>
            <div className="title">Sign Up</div>
            <Form className="form-container">
                <div className="d-flex justify-content-center">
                    <Image
                        id={'avatar'}
                        alt="avatar signin"
                        className="bg-white rounded-circle"
                        src={'/../../../../images/LogoTGex.png'}
                        width={150}
                        height={150}
                    />
                </div>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label className="text-white fw-bold">
                        Username:
                    </Form.Label>
                    <Form.Control
                        className="rounded-pill ps-3"
                        type="text"
                        placeholder="Enter your username"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white fw-bold">
                        Email address:
                    </Form.Label>
                    <Form.Control
                        className="rounded-pill ps-3"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-white fw-bold">
                        Password:
                    </Form.Label>
                    <Form.Control
                        className="rounded-pill ps-3"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword"
                >
                    <Form.Label className="text-white fw-bold">
                        Confirm your password:
                    </Form.Label>
                    <Form.Control
                        className="rounded-pill ps-3"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        className="text-white"
                        type="checkbox"
                        label="Show password"
                        onClick={handleShowpassword}
                    />
                </Form.Group>
                <Button type="submit" className="btn-submit">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
}

export default SignIn;
