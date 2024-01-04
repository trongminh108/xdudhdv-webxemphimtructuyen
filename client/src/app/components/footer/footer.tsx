'use client';

import './footer.scss';

import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';

function Footer() {
    const sizeIcon = 30;

    return (
        <Container fluid className="footer">
            <Row className="h-100">
                <Col xl={7}>
                    <div className="d-flex align-items-center h-100 logoText">
                        <Image
                            id={'avatar'}
                            alt="film poster"
                            className="logoFooter"
                            src={'/../../../../images/LogoTGex.png'}
                            width={120}
                            height={120}
                        />
                        <h1 className="text-white">T - Gex Films</h1>
                    </div>
                    <div></div>
                </Col>
                <Col className="d-flex justify-content-center flex-column contactsFooter">
                    <div className="contact contactIcon">
                        <IoCall className="text-white" size={sizeIcon} />
                        <Link
                            href={``}
                            className="text-decoration-none text-white cursor-pointer"
                        >
                            <span className="text-white">
                                Hotline: 0772104719
                            </span>
                        </Link>
                    </div>
                    <div className="contact contactIcon">
                        <IoIosMail className="text-white" size={sizeIcon} />
                        <Link
                            href={`mailto: indoorcinema@gmail.com`}
                            className="text-decoration-none text-white cursor-pointer"
                        >
                            <span className="text-white">
                                Mail: indoorcinema@gmail.com
                            </span>
                        </Link>
                    </div>
                    <div className="contact">
                        <span className="text-white">Follow us on</span>
                        <Link
                            href={`https://www.facebook.com/trongminhluu108/`}
                            className="text-decoration-none text-white contactIcon"
                        >
                            <FaFacebook
                                className="text-white"
                                size={sizeIcon - 5}
                            />
                        </Link>
                        <Link
                            href={`https://www.youtube.com/@iamowl108`}
                            className="text-decoration-none text-white contactIcon"
                        >
                            <FaYoutube
                                className="text-white"
                                size={sizeIcon - 5}
                            />
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
