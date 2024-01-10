'use client';

import './adminLayout.scss';

import Cookies from 'js-cookie';
import { Col, Container, Row } from 'react-bootstrap';

import LeftSidebar from '@/app/components/admin/leftSideBar/leftSidebar';
import { access_token_role } from '@/constants/cookies';

function AdminLayout({ children }: { children: React.ReactNode }) {
    const cookie_role = Cookies.get(access_token_role);

    return (
        <Container fluid>
            <Row>
                <Col xl={2} className="p-0">
                    <LeftSidebar />
                </Col>
                {cookie_role == '1' && (
                    <Col className="p-0 backgroundPrimary">{children}</Col>
                )}
                {cookie_role != '1' && (
                    <Col className="p-0 backgroundPrimary">
                        <Container>
                            <p className="text-dark">{`You need admin permission :<`}</p>
                        </Container>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default AdminLayout;
