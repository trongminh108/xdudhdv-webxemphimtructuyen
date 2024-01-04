import { gql } from '@apollo/client';
const getAllFilms = gql`
    query getAllFilmsQuery {
        films {
            id
            name
            category
            releaseYear
            country
            director
            actors
            poster
            views
            rate
            linkFilm
            description
        }
    }
`;

const getFilmById = gql`
    query getFilmByIdQuery($filmId: ID!) {
        film(id: $filmId) {
            id
            name
            category
            releaseYear
            country
            director
            actors
            poster
            views
            rate
            linkFilm
            description
        }
    }
`;
export { getAllFilms, getFilmById };
