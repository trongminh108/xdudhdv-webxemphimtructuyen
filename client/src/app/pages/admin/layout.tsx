'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '@/app/components/admin/leftSideBar/leftSideBar';

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <Container fluid>
            <Row>
                <Col xl={2} className="p-0">
                    <Sidebar />
                </Col>
                <Col className="p-0">{children}</Col>
            </Row>
        </Container>
    );
}

export default AdminLayout;
