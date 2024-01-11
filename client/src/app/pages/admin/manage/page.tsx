'use client';

import './manage.scss';

import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

import { useData } from '@/app/components/context/context';
import { access_token_role } from '@/constants/cookies';
import FilmService from '@/services/FilmService';
import filmInterface from '@/assets/interfaces/film';
import { BACKEND_URL_IMAGES } from '@/constants/url';
import Film_Category from '@/services/Film_Category';

function Manage() {
    const [films, setFilms] = useState<Array<filmInterface> | null>(null);

    useEffect(() => {
        async function getFilms() {
            const res = await FilmService.getObjects();
            setFilms(res);
        }

        document.title = 'Manage';
        getFilms();
    }, []);

    const iconSize = 35;
    const cookie_role = Cookies.get(access_token_role);
    const { setData } = useData();

    function handleClickEdit(film: any) {
        setData(film);
    }

    async function handleDeleteFilm(film_id: any, film_name: any) {
        const result = window.confirm(`Do you want to delete ${film_name}`);

        if (result) {
            Film_Category.deleteObjectsByIdPhim(film_id);
            FilmService.deleteObject(film_id);
            alert(`Deleted success film ${film_name}`);
        }
    }

    if (films == null)
        return (
            <Container>
                <p className="text-dark">{`You need admin permission :<`}</p>
            </Container>
        );

    return (
        films != null && (
            <Container className="manageContainer">
                <Row>
                    <Col xl={3}>
                        <h1 className="text-white py-2">List Films</h1>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <Link href={`/pages/admin/create-film`}>
                            <Button variant="primary">Add new film</Button>
                        </Link>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="px-3">
                    <table className="table table-hover table-bordered">
                        <thead className="table-header">
                            <tr className="">
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {films.map((film: filmInterface, idx: number) => {
                                return (
                                    <tr key={film.id}>
                                        <td className="align-middle text-center">
                                            {idx + 1}
                                        </td>
                                        <td className="w-25 align-middle">
                                            {film.tenPhim}
                                        </td>
                                        <td className="align-middle text-center">
                                            <Image
                                                id={film.id}
                                                alt="film poster"
                                                className=""
                                                src={
                                                    BACKEND_URL_IMAGES +
                                                    film.poster
                                                }
                                                width={54}
                                                height={80}
                                            />
                                        </td>
                                        <td className="align-middle text-center">
                                            <Link
                                                href={`/pages/admin/edit-film/${film.id}`}
                                                onClick={() =>
                                                    handleClickEdit(film)
                                                }
                                            >
                                                <FiEdit
                                                    className="text-warning"
                                                    size={iconSize}
                                                />
                                            </Link>
                                        </td>
                                        <td className="align-middle text-center">
                                            <Link
                                                href={``}
                                                onClick={() => {
                                                    handleDeleteFilm(
                                                        film.id,
                                                        film.tenPhim
                                                    );
                                                }}
                                            >
                                                <MdDelete
                                                    className="text-danger"
                                                    size={iconSize}
                                                />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Row>
            </Container>
        )
    );
}

export default Manage;
