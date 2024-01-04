'use client';

import './search.scss';

import { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ListFilms from '@/assets/api/films';
import PopularFilms from '@/assets/api/Popularfilms';

import FilmsContainer from '@/app/components/filmsContainer/filmsContainer';
import Sidebar from '@/app/components/sidebar/sidebar';
import { useData } from '@/app/components/context/context';

function Search() {
    const { data: searchQuery } = useData();

    useEffect(() => {
        document.title = 'Search';
    }, []);
    return (
        <Container fluid className="home-container">
            <Row className="d-flex justify-content-around">
                <Col xs={3} className="px-0">
                    <Sidebar data={PopularFilms} />
                </Col>
                <Col
                    xs={8}
                    className="px-0"
                    // style={{ backgroundColor: 'green' }}
                >
                    <Suspense fallback={<></>}>
                        <FilmsContainer
                            data={ListFilms}
                            searchQuery={searchQuery}
                        />
                    </Suspense>
                </Col>
            </Row>
        </Container>
    );
}

export default Search;
