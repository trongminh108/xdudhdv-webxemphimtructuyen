import './popularFilm.scss';

import Image from 'next/image';
import Link from 'next/link';

import FilmInterface from '@/assets/interfaces/film';
import Rated from '../rated/rated';
import { BACKEND_URL_IMAGES } from '@/constants/url';

function PopularFilm({ film }: { film: FilmInterface }) {
    return (
        <Link
            className="popularFilmContainer"
            href={`/pages/detail/${film.id}`}
        >
            <div className="image">
                <Image
                    id={film.id}
                    alt="film poster"
                    className="popularFilmPoster"
                    src={BACKEND_URL_IMAGES + film.poster}
                    width={270}
                    height={400}
                />
            </div>
            <div className="popularFilmDetail">
                <p>{film.tenPhim}</p>
                <p>{film.luotXem} views</p>
                <Rated rated={film.danhGia} />
            </div>
        </Link>
    );
}

export default PopularFilm;
