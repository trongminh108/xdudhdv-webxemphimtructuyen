import { Container, Row, Col } from 'react-bootstrap';
import Pagination from '../pagination/pagination';

function FilmsContainerLoading({ message }: { message: string }) {
    return (
        <Container
            fluid
            className="d-flex flex-column justify-content-between filmsContainer rounded-5"
            style={{ backgroundColor: 'royalblue' }}
        >
            <Row xs={4}>{message}</Row>
            <Row>
                <Pagination
                    pagination={{ page: 0, limit: 0, totalElements: 0 }}
                    onPageChange={() => {}}
                />
            </Row>
        </Container>
    );
}

export default FilmsContainerLoading;
