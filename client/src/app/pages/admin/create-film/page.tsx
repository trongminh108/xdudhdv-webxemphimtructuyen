'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useData } from '@/app/components/context/context';
import { useMutation } from '@apollo/client';
import { CREATE_FILM, UPDATE_FILM } from '@/graphql-client/mutations';
import { getAllFilms } from '@/graphql-client/queries';
import { useRouter } from 'next/navigation';
import { BACKEND_URL_FILE_UPLOAD, BACKEND_URL_IMAGES } from '@/constants/url';
import axios from 'axios';

function CreateFilm() {
    useEffect(() => {
        document.title = 'Create new Film';
    }, []);

    const router = useRouter();
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

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        releaseYear: '',
        country: '',
        director: '',
        actors: '',
        views: '',
        rate: '',
        linkFilm: '',
        description: '',
    });

    const [createFilmMutation, datacreateFilmMutation] =
        useMutation(CREATE_FILM);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    async function handleSaveFile() {
        const formData = new FormData();
        await formData.append('file', fileImg);
        await axios
            .post(BACKEND_URL_FILE_UPLOAD, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response?.data);
            })
            .catch((rej) => {
                console.log(rej.message);
            });
    }

    async function handleSaveOnClick(e: any) {
        e.preventDefault();
        const createFilmInput = {
            name: formData.name,
            category: formData.category
                .split(',')
                .map((category: any) => category.trim()),
            releaseYear: formData.releaseYear,
            country: formData.country,
            director: formData.director,
            actors: formData.actors
                .split(',')
                .map((actor: any) => actor.trim()),
            poster: '',
            views: formData.views,
            rate: formData.rate,
            linkFilm: formData.linkFilm,
            description: formData.description,
        };
        try {
            if (fileImg != undefined) {
                handleSaveFile();
                createFilmInput.poster = BACKEND_URL_IMAGES + fileImg?.name;
            }
            await createFilmMutation({
                variables: { createFilmInput: createFilmInput },
                refetchQueries: [{ query: getAllFilms }],
            });
            alert('Created success!');
            router.replace('/pages/admin/manage');
        } catch (ex: any) {
            console.log('Error: ', ex.message);
        }
    }

    return (
        <Container fluid className="edit-film-container">
            <Form className="m-4">
                <div className="mb-3">
                    <p className="fw-bold">Poster film</p>
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
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Film name:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Categories:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="category"
                        onChange={handleInputChange}
                        value={formData.category}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Release Year:
                    </InputGroup.Text>
                    <Form.Control
                        type="number"
                        name="releaseYear"
                        onChange={handleInputChange}
                        value={formData.releaseYear}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Country:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="country"
                        onChange={handleInputChange}
                        value={formData.country}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Director:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="director"
                        onChange={handleInputChange}
                        value={formData.director}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Actors:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="actors"
                        onChange={handleInputChange}
                        value={formData.actors}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Views:
                    </InputGroup.Text>
                    <Form.Control
                        type="number"
                        name="views"
                        onChange={handleInputChange}
                        value={formData.views}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Rating:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="rate"
                        onChange={handleInputChange}
                        value={formData.rate}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Link film:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="linkFilm"
                        onChange={handleInputChange}
                        value={formData.linkFilm}
                    />
                </InputGroup>

                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label className="fw-bold">{`Film's Description`}</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={handleInputChange}
                        value={formData.description}
                        name="description"
                    />
                </Form.Group>
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
                    <Col xl={2}>
                        <Button
                            variant="danger"
                            type="reset"
                            className="w-100"
                            onClick={() => {
                                router.replace('/pages/admin/manage');
                            }}
                        >
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default CreateFilm;
