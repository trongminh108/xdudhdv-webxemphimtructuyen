import Link from 'next/link';
import './leftSidebar.scss';

import React, { useRef } from 'react';
import { Container, Row } from 'react-bootstrap';

const dataLSB = [
    {
        name: 'Films',
        link: '/pages/admin/manage',
    },
    {
        name: 'Categories',
        link: '/pages/admin/category/manage',
    },
    {
        name: 'Actors',
        link: '/pages/admin/actor/manage',
    },
    {
        name: 'Directors',
        link: '/pages/admin/director/manage',
    },
    {
        name: 'Countries',
        link: '/pages/admin/country/manage',
    },
];

function LeftSidebar() {
    const navRef = useRef<HTMLDivElement>(null);

    function handleOnClickNavItem(event: any) {
        const nav = navRef.current;
        const itemActive = nav?.querySelector('.btnManage.active');
        itemActive?.classList.remove('active');
        event.target.classList.add('active');
    }

    return (
        <Container fluid className="leftSidebarContainer" ref={navRef}>
            {dataLSB.map((item) => {
                return (
                    <Row
                        key={item.name}
                        className="d-flex justify-content-center"
                    >
                        <Link
                            href={item.link}
                            className="btnManage"
                            onClick={handleOnClickNavItem}
                        >
                            {item.name}
                        </Link>
                    </Row>
                );
            })}
        </Container>
    );
}

export default LeftSidebar;
