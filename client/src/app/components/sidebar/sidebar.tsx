import './sidebar.scss';

import Film from '../popularFilm/popularFilm';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import FilmService from '@/services/FilmService';

function Sidebar({ data }: { data: {}[] }) {
    const [popularFilms, setPopularFilms] = useState([]);

    useEffect(() => {
        async function getPopularFilms() {
            const res = await FilmService.getFilmsViewDESC();
            setPopularFilms(res);
        }
        getPopularFilms();
    }, []);

    return (
        <Container fluid className="px-0">
            <Col>
                <h3 className="text-white mt-4">Phim xem nhiều</h3>
            </Col>
            <Col
                style={{
                    backgroundColor: 'red',
                    height: '100vh',
                    overflowY: 'auto',
                }}
                className="d-flex 
                flex-column 
                align-items-center
                justify-content-start 
                rounded-5
                my-4
                sidebar-col"
            >
                {popularFilms.map((item: any) => (
                    <Film film={item} key={item.id} />
                ))}
            </Col>
        </Container>
    );
}

export default Sidebar;
