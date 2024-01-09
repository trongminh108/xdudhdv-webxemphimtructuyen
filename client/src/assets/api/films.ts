import filmInterface from '@/assets/interfaces/film';

const films: Array<filmInterface> = [
    {
        id: '1',
        shortName: 'accepted',
        name: 'Accepted',
        releaseYear: 2006,
        country: 'USA',
        director: '1',
        type: '1',
        linkFilm:
            'https://drive.google.com/file/d/1yNp1lrbFGopwcl_R-vrpV9zcE3EsVna_/preview',
        poster: 'http://localhost:4000/image/fileSystem/accepted.jpg',
        views: 11,
        rate: 3.2,
        description:
            "A high school slacker who's rejected by every school he applies to opts to create his own institution of higher learning, the South Harmon Institute of Technology, on a rundown piece of property near his hometown.",
    },
    {
        id: '2',
        shortName: 'ice-age-5',
        name: 'Ice Age 5',
        releaseYear: 2016,
        country: 'USA',
        director: '2',
        type: '1',
        linkFilm:
            'https://drive.google.com/file/d/186i69w8eDyLXmNxZb4gBm4XO9dCL3J7p/preview',
        poster: 'http://localhost:4000/image/fileSystem/ice-age-5.jpg',
        views: 22,
        rate: 2.85,
        description:
            "When Scrat's acorn sends an asteroid to Earth, the Herd must find a way to stop the asteroid from hitting Earth with the help of a returning friend.",
    },
    {
        id: '3',
        shortName: 'baby-driver',
        name: 'Baby Driver',
        releaseYear: 2017,
        country: 'USA',
        director: '3',
        type: '1',
        linkFilm:
            'https://drive.google.com/file/d/1R187yDfe55wGJWHYYJ1cEuD-Dev4RFLa/preview',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNzY5OTc3Nl5BMl5BanBnXkFtZTcwNjE4NDQzMQ@@._V1_.jpg',
        views: 33,
        rate: 3.75,
        description:
            'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.',
    },
    {
        id: '4',
        shortName: 'sherlock-holmes-2009',
        name: 'Sherlock Holmes (2009)',
        releaseYear: 2009,
        country: 'USA',
        director: '4',
        type: '1',
        linkFilm:
            'https://drive.google.com/file/d/1m3TOE2gGm8ttmcfaInZqa2MjDRO3JuMl/preview',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNzY5OTc3Nl5BMl5BanBnXkFtZTcwNjE4NDQzMQ@@._V1_.jpg',
        views: 44,
        rate: 3.8,
        description:
            'Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.',
    },
    {
        id: '5',
        shortName: 'pirates-of-caribbean-the-curse-of-the-black-pearl-2003',
        name: 'Pirates Of The Caribbean - The Curse of the Black Pearl (2003)',
        releaseYear: 2003,
        country: 'USA',
        director: '5',
        type: '1',
        linkFilm:
            'https://drive.google.com/file/d/1SE_yXK6kNQlBDm8MBDhJz8dBnrMr7b1o/preview',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNzY5OTc3Nl5BMl5BanBnXkFtZTcwNjE4NDQzMQ@@._V1_.jpg',
        views: 55,
        rate: 4.05,
        description:
            "Blacksmith Will Turner teams up with eccentric pirate 'Captain' Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    },
];

export default films;
