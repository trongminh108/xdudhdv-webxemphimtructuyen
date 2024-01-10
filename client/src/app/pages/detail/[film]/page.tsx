/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import './detailFilmSlug.scss';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useData } from '@/app/components/context/context';
import Rated from '@/app/components/rated/rated';
import SidebarComment from '@/app/components/sidebarComment/sidebarComment';
import filmsData from '@/assets/api/films';
import filmInterface from '@/assets/interfaces/film';
import FilmService from '@/services/FilmService';
import { BACKEND_URL_IMAGES } from '@/constants/url';
import DirectorService from '@/services/DirectorService';
import directorInterface from '@/assets/interfaces/director';
import CountryService from '@/services/CountryService';
import Film_Category from '@/services/Film_Category';
import CategoryService from '@/services/CategoryService';
import ActorService from '@/services/ActorService';

function DetailFilm({ params }: any) {
    const [film, setFilm] = useState<filmInterface | null>(null);
    const [detailsFilm, setDetailsFilm] = useState<any>(null);
    const { setData } = useData();

    useEffect(() => {
        async function getDetailsFilm() {
            const res: filmInterface = await FilmService.getObjectById(
                params.film
            );
            const director = await DirectorService.getObjectById(res.daoDien);
            const country = await CountryService.getObjectById(res.quocGia);
            const categories_object = await CategoryService.getObjectsByIdPhim(
                res.id
            );
            const actors = await ActorService.getObjectsByIdPhim(res.id);

            setFilm(res);
            setDetailsFilm({
                daoDien: director.tenDaoDien,
                quocGia: country.tenQuocGia,
                theLoai: categories_object.map((cate: any) => cate.tenTheLoai),
                dienVien: actors.map((actor: any) => actor.tenDienVien),
            });
        }

        document.title = 'Detail Film';
        getDetailsFilm();
    }, [params.film]);

    async function handleOnClickWatchFilm() {
        // setData({
        //     name: film.name,
        //     linkFilm: film.linkFilm,
        // });
        if (film != null && film?.id)
            await FilmService.updateViewObject(film?.id);
    }

    return (
        film != null &&
        detailsFilm != null && (
            <Container className="detailFilmContainer" fluid>
                <Row>
                    <Col className="title">{film.tenPhim}</Col>
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
                                                        src={
                                                            BACKEND_URL_IMAGES +
                                                            film.poster
                                                        }
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
                                            <p>
                                                Đạo diễn: {detailsFilm.daoDien}
                                            </p>
                                            <p>
                                                Diễn viên:{' '}
                                                {detailsFilm.dienVien.join(
                                                    ', '
                                                )}
                                            </p>
                                            <p>
                                                Quốc gia: {detailsFilm.quocGia}
                                            </p>
                                            <p>
                                                Năm phát hành:{' '}
                                                {film.namPhatHanh}
                                            </p>
                                            <p>
                                                Thể loại:{' '}
                                                {detailsFilm.theLoai.join(', ')}
                                            </p>
                                            <p>Lượt xem: {film.luotXem}</p>
                                            <div className="rated">
                                                <p>Đánh giá:</p>
                                                <Rated rated={film.danhGia} />
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
                                    <p>{film.moTa}</p>
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
        )
    );
}

export default DetailFilm;
