'use client';

import './create-film.scss';

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Col, Container, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useData } from '@/app/components/context/context';
import category from '@/assets/interfaces/category';
import country from '@/assets/interfaces/country';
import director from '@/assets/interfaces/director';
import filmInterface from '@/assets/interfaces/film';
import { BACKEND_URL_FILE_UPLOAD, BACKEND_URL_IMAGES } from '@/constants/url';
import { CREATE_FILM, UPDATE_FILM } from '@/graphql-client/mutations';
import { getAllFilms } from '@/graphql-client/queries';
import CategoryService from '@/services/CategoryService';
import CountryService from '@/services/CountryService';
import DirectorService from '@/services/DirectorService';
import FileUploadService from '@/services/FileUploadService';
import Film_Category from '@/services/Film_Category';
import FilmService from '@/services/FilmService';
import { useMutation } from '@apollo/client';

function CreateFilm() {
    const router = useRouter();
    const [avatar, setAvatar] = useState('');
    const [fileImg, setFileImg] = useState();
    const [filmData, setFilmData] = useState<filmInterface>();
    const [directors, setDirectors] = useState<Array<director> | null>(null);
    const [countries, setCountries] = useState<Array<country> | null>(null);
    const [categories, setCategories] = useState<Array<category> | null>(null);
    const [checkboxValues, setCheckboxValues] = useState<Array<any>>([]);

    useEffect(() => {
        async function getFilmById() {
            const director_obj = await DirectorService.getObjects();
            const country_obj = await CountryService.getObjects();
            const category_obj = await CategoryService.getObjects();
            setDirectors(director_obj);
            setCountries(country_obj);
            setCategories(category_obj);
            setFilmData({
                id: '0',
                tenPhim: '',
                tenVietTat: '',
                namPhatHanh: 0,
                quocGia: '',
                daoDien: '',
                loaiPhim: '1',
                linkPhim: '',
                luotXem: 0,
                danhGia: 0,
                poster: '',
                moTa: '',
            });
        }

        document.title = 'Create new Film';
        getFilmById();
    }, []);

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar);
        };
    }, [avatar]);

    function handleOnChange(event: any) {
        const file = event.target.files[0];
        setAvatar(URL.createObjectURL(file));
        setFileImg(file);
        setFilmData((prev: any) => ({ ...prev, poster: file.name }));
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFilmData((prevData: any) => ({ ...prevData, [name]: value }));
    };

    function handleCheckboxChange(category: any) {
        setCheckboxValues((prev: any) => {
            return prev.includes(category)
                ? prev.filter((item: any) => item !== category)
                : [...prev, category];
        });
    }

    async function handleSaveOnClick(e: any) {
        e.preventDefault();

        const result = window.confirm(
            `Do you want to add new film ${filmData?.tenPhim}`
        );

        if (result) {
            try {
                if (fileImg) await FileUploadService.uploadFile(fileImg);
                await FilmService.createObject(filmData);
                await Film_Category.addCategoriesByIdPhim(
                    checkboxValues,
                    filmData?.id
                );
                // console.log(filmData);
                alert(`Updated ${filmData?.tenPhim} success!`);
            } catch (ex: any) {
                console.log('Error: ', ex.message);
            }
        }
    }

    if (filmData == null)
        return (
            <Container>
                <p className="text-dark">{`You need admin permission :<`}</p>
            </Container>
        );

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

                    <Image
                        alt="poster"
                        src={avatar || `/../../../../images/LogoTGex.png`}
                        width={135}
                        height={200}
                    />
                </div>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Film name:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="tenPhim"
                        onChange={handleInputChange}
                        value={filmData.tenPhim}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Film short name:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="tenVietTat"
                        onChange={handleInputChange}
                        value={filmData.tenVietTat}
                    />
                </InputGroup>
                <InputGroup className="mb-3 d-flex align-items-center">
                    <InputGroup.Text className="fw-bold">
                        Categories:
                    </InputGroup.Text>
                    {categories?.map((item) => (
                        <Col key={item.id}>
                            <Form.Check
                                type="checkbox"
                                label={item.tenTheLoai}
                                id={item.id}
                                checked={checkboxValues.includes(item.id)}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                        </Col>
                    ))}
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Release Year:
                    </InputGroup.Text>
                    <Form.Control
                        type="number"
                        name="namPhatHanh"
                        onChange={handleInputChange}
                        value={filmData.namPhatHanh}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Country:
                    </InputGroup.Text>
                    <Form.Select
                        aria-label="Default select example"
                        onChange={handleInputChange}
                        name="quocGia"
                        value={filmData.quocGia}
                    >
                        {countries?.map((dir: country) => {
                            return (
                                <option value={dir.id} key={dir.id}>
                                    {dir.tenQuocGia}
                                </option>
                            );
                        })}
                    </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Director:
                    </InputGroup.Text>
                    <Form.Select
                        aria-label="Default select example"
                        onChange={handleInputChange}
                        name="daoDien"
                        value={filmData.daoDien}
                    >
                        {directors?.map((dir: director) => {
                            return (
                                <option value={dir.id} key={dir.id}>
                                    {dir.tenDaoDien}
                                </option>
                            );
                        })}
                    </Form.Select>
                </InputGroup>
                {/* <InputGroup className="mb-3">
                        <InputGroup.Text className="fw-bold">
                            Actors:
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            name="actors"
                            onChange={handleInputChange}
                            value={formData.actors}
                        />
                    </InputGroup> */}
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Views:
                    </InputGroup.Text>
                    <Form.Control
                        type="number"
                        name="luotXem"
                        onChange={handleInputChange}
                        value={filmData.luotXem}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Rating:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="danhGia"
                        onChange={handleInputChange}
                        value={filmData.danhGia}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="fw-bold">
                        Link film:
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="linkPhim"
                        onChange={handleInputChange}
                        value={filmData.linkPhim}
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
                        value={filmData.moTa}
                        name="moTa"
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
