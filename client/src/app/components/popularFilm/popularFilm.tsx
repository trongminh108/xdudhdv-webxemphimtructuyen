import './popularFilm.scss';

import Image from 'next/image';
import Link from 'next/link';

import FilmInterface from '@/assets/interfaces/film';
import Rated from '../rated/rated';

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
                    src={film.poster}
                    width={270}
                    height={400}
                />
            </div>
            <div className="popularFilmDetail">
                <p>{film.name}</p>
                <p>{film.views} views</p>
                <Rated rated={film.rate} />
            </div>
        </Link>
    );
}

export default PopularFilm;
