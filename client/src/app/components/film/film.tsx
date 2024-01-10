import './film.scss';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import filmInterface from '@/assets/interfaces/film';
import { BACKEND_URL_IMAGES } from '@/constants/url';

function Film({ film }: { film: filmInterface }) {
    return (
        <Link className="filmContainer" href={`/pages/detail/${film.id}`}>
            <Suspense
                fallback={
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            color: 'red',
                        }}
                    >
                        Loading Poster
                    </div>
                }
            >
                <Image
                    id={film.id}
                    alt="film poster"
                    className="filmPoster"
                    src={BACKEND_URL_IMAGES + film.poster}
                    width={270}
                    height={400}
                />
            </Suspense>
            <div className="filmDetail" id={film.id}>
                {film.tenPhim}
            </div>
        </Link>
    );
}

export default Film;
