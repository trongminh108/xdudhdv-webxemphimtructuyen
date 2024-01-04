'use client';

import './home.scss';

import { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ListFilms from '@/assets/api/films';

import FilmsContainer from '../components/filmsContainer/filmsContainer';
import Sidebar from '../components/sidebar/sidebar';

function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <Container fluid className="home-container">
            <Row className="d-flex justify-content-around">
                <Col xs={3} className="px-0">
                    <Sidebar data={ListFilms} />
                </Col>
                <Col xs={8} className="px-0">
                    <Suspense fallback={<></>}>
                        <Row>
                            <h4 className="text-white mt-4">Danh sách phim</h4>
                        </Row>
                        <FilmsContainer data={ListFilms} />
                    </Suspense>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
