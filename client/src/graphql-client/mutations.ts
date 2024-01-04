import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
    mutation LoginMutation($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            access_token
            user {
                username
                gmail
                role
            }
        }
    }
`;

export const UPDATE_FILM = gql`
    mutation UpdateFilm($updateFilmInput: UpdateFilmInput!) {
        updateFilm(updateFilmInput: $updateFilmInput) {
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

export const CREATE_FILM = gql`
    mutation CreateFilm($createFilmInput: CreateFilmInput!) {
        createFilm(createFilmInput: $createFilmInput) {
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

export const DELETE_FILM = gql`
    mutation RemoveFilm($removeFilmId: ID!) {
        removeFilm(id: $removeFilmId) {
            name
        }
    }
`;
