'use client';

import { useData } from '@/app/components/context/context';
import './watchFilmSlug.scss';

import Iframe from 'react-iframe';
import { useEffect } from 'react';
import films from '@/assets/api/films';

function WatchFilm({ params }: any) {
    const film = films.find((film) => film.id == params.film_id);

    useEffect(() => {
        document.title = film.name;
    }, [film.name]);

    return (
        <div className="watchFilmContainer">
            <div className="filmScreen">
                <Iframe
                    className="filmFrame"
                    url={film.linkFilm}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
}

export default WatchFilm;
