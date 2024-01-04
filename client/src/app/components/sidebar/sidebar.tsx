import './sidebar.scss';

import Film from '../popularFilm/popularFilm';
import { Container, Row, Col } from 'react-bootstrap';

function Sidebar({ data }: { data: {}[] }) {
    function compare(a: any, b: any) {
        return b.views - a.views;
    }

    data.sort(compare);

    return (
        // <div className="sidebarContainer">
        //     {data.map((item: any) => (
        //         <Film film={item} key={item.id} />
        //     ))}
        // </div>
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
                {data.map((item: any) => (
                    <Film film={item} key={item.id} />
                ))}
            </Col>
        </Container>
    );
}

export default Sidebar;
