'use client';

import FileUploadService from '@/services/FileUploadService';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

function TestUploadImage() {
    const [avatar, setAvatar] = useState('');
    const [fileImg, setFileImg] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar);
        };
    }, [avatar]);

    function handleOnChange(event: any) {
        const file = event.target.files[0];
        setAvatar(URL.createObjectURL(file));
        setFileImg(file);
    }

    async function handleSaveOnClick(event: any) {
        event.preventDefault();

        try {
            const res = await FileUploadService.uploadFile(fileImg);
            // console.log(avatar);
            // console.log(fileImg);
            console.log(res);
        } catch (e) {}
    }

    return (
        <Container fluid className="edit-film-container py-3">
            <Form className="m-4">
                <div className="mb-3">
                    <input
                        type="file"
                        name="uploadImage"
                        id="uploadImage"
                        className="uploadImage"
                        onChange={handleOnChange}
                    />
                    {avatar && (
                        <Image alt="" src={avatar} width={135} height={200} />
                    )}
                </div>

                <Row>
                    <Col xl={2}>
                        <Button
                            variant="success"
                            type="submit"
                            className="w-100"
                            onClick={handleSaveOnClick}
                        >
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default TestUploadImage;
