/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import './detailFilmSlug.scss';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useData } from '@/app/components/context/context';
import Rated from '@/app/components/rated/rated';
import SidebarComment from '@/app/components/sidebarComment/sidebarComment';
import filmsData from '@/assets/api/films';
import filmInterface from '@/assets/interfaces/film';

function DetailFilm({ params }: any) {
    useEffect(() => {
        document.title = 'Detail Film';
    }, []);

    const film: any = filmsData.find((film) => params.film == film.id) ?? null;
    const { setData } = useData();

    function handleOnClickWatchFilm() {
        setData({
            name: film.name,
            linkFilm: film.linkFilm,
        });
    }

    return (
        <Container className="detailFilmContainer" fluid>
            <Row>
                <Col className="title">{film.name}</Col>
            </Row>
            <Row>
                {/* Film detail component */}
                <Col xl={8} className="mx-3">
                    <Row>
                        <Col className="thongTinFilm">
                            <Row>
                                <Col xl={4}>
                                    <Row>
                                        <Col>
                                            <div className="detail-poster">
                                                <Image
                                                    id={film.id}
                                                    alt="film poster"
                                                    src={film.poster}
                                                    width={540}
                                                    height={800}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="btns">
                                                <Link
                                                    href={''}
                                                    className="btn btn-trailer"
                                                >
                                                    Trailer
                                                </Link>
                                                <Link
                                                    className="btn btn-watch"
                                                    href={`/pages/watch-film/${film.id}`}
                                                    onClick={
                                                        handleOnClickWatchFilm
                                                    }
                                                >
                                                    Xem phim
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={8}>
                                    <div className="thongTinChiTiet">
                                        <p>Đạo diễn: {film.director}</p>
                                        <p>
                                            Diễn viên: {film.actors.join(', ')}
                                        </p>
                                        <p>Quốc gia: {film.country}</p>
                                        <p>Năm phát hành: {film.releaseYear}</p>
                                        <p>
                                            Thể loại: {film.category.join(', ')}
                                        </p>
                                        <p>Lượt xem: {film.views}</p>
                                        <div className="rated">
                                            <p>Đánh giá:</p>
                                            <Rated rated={film.rate} />
                                        </div>
                                        {/* <p style={{ textAlign: 'justify' }}>
                                            <b>Mô tả:</b> {film.description}
                                        </p> */}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className="thongTinFilm moTa">
                            <b>Mô tả</b>
                            <div style={{ textAlign: 'justify' }}>
                                <p>{film.description}</p>
                            </div>
                        </div>
                    </Row>
                </Col>
                {/* Sidebar Comments */}
                <Col className="my-4">
                    <SidebarComment />
                </Col>
            </Row>
        </Container>
    );
}

export default DetailFilm;
