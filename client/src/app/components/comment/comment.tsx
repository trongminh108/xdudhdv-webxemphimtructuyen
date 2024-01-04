import './comment.scss';

import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CommentInterface from '@/assets/interfaces/comment';

function Comment({ avatar, name, content }: CommentInterface) {
    return (
        <Container className="text-white commentContainer bg-success rounded mb-2">
            <Row>
                <Col xl={8} className="d-flex m-3">
                    <div className="avatar">
                        <Image
                            id={'avatar'}
                            alt="film poster"
                            className="filmPoster"
                            src={'/../../../../images/incognitoAvatar.png'}
                            width={48}
                            height={48}
                        />
                    </div>
                    <div className="name-content ms-2">
                        <b>{name}</b>
                        <p className="text-align-justify">{content}</p>
                    </div>
                </Col>
                <Col className=""></Col>
            </Row>
        </Container>
    );
}

export default Comment;
