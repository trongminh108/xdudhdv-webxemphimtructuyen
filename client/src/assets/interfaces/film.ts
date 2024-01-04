interface film {
    id?: string;
    shortName?: string;
    name?: string;
    releaseYear?: number;
    country?: string;
    director?: string;
    type?: string;
    linkFilm?: string;
    views?: number;
    rate?: number;
    description?: string;
    category?: string[];
    actors?: string[];
    poster?: string;
}

export default film;
