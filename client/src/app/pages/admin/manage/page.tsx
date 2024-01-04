'use client';

import './manage.scss';

import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

import { useData } from '@/app/components/context/context';
import { user_role } from '@/constants/cookies';
import filmsData from '@/assets/api/films';

function Manage() {
    useEffect(() => {
        document.title = 'Manage';
    }, []);

    const iconSize = 35;
    const cookie_role = Cookies.get(user_role);
    const { setData } = useData();

    if (cookie_role != '1')
        return (
            <Container className="manageContainer">
                <p className="text-white">{`You need admin permission :<`}</p>
            </Container>
        );

    function handleClickEdit(film: any) {
        setData(film);
    }

    async function handleDeleteFilm(film_id: any, film_name: any) {
        const result = window.confirm(`Do you want to delete ${film_name}`);

        if (result) {
            alert(`Deleted success film ${film_name}`);
        }
    }

    return (
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
                        {filmsData.map((film: any, idx: number) => {
                            return (
                                <tr key={film.id}>
                                    <td className="align-middle text-center">
                                        {idx + 1}
                                    </td>
                                    <td className="w-25 align-middle">
                                        {film.name}
                                    </td>
                                    <td className="align-middle text-center">
                                        <Image
                                            id={film.id}
                                            alt="film poster"
                                            className=""
                                            src={film.poster}
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
                                                    film.name
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
    );
}

export default Manage;
