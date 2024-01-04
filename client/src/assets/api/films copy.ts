import film from '../interfaces/film';

const films = [
    {
        id: '1',
        name: 'Inception',
        category: ['Sci - Fi', 'Action'],
        releaseYear: 2010,
        country: 'USA',
        director: 'Christopher Nolan',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/inception.jpg',
        views: 10,
        rate: 4.5,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Leo DiCaprio đánh cắp giấc mơ, thâm nhập vào những tầng sâu tâm trí. Một bộ phim hành động khoa học viễn tưởng ly kỳ, xoáy sâu vào thế giới của những giấc mơ bí ẩn và những kẻ thao túng giấc ngủ. (Sci-Fi, Action)',
    },
    {
        id: '2',
        name: 'The Social Network',
        category: ['Drama', 'Thriller'],
        releaseYear: 2010,
        country: 'USA',
        director: 'David Fincher',
        actors: ['Jesse Eisenberg', 'Andrew Garfield', 'Justin Timberlake'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/the-social-network.jpg',
        views: 12,
        rate: 3.9,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Câu chuyện về sự ra đời của Facebook, từ những dòng code của Mark Zuckerberg đến đế chế mạng xã hội hùng mạnh. Một phim tâm lý hấp dẫn về tham vọng, cạnh tranh và giá trị của kết nối trong thế giới ảo. (Drama, Thriller)',
    },
    {
        id: '3',
        name: 'Toy Story 3',
        category: ['Animation', 'Family'],
        releaseYear: 2010,
        country: 'USA',
        director: 'Lee Unkrich',
        actors: ['Tom Hanks', 'Tim Allen', 'Joan Cusack'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/toy-story-3.jpg',
        views: 13,
        rate: 4.15,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Những món đồ chơi thân quen của Andy lớn lên, đối mặt với những thay đổi và tìm kiếm ý nghĩa mới trong cuộc sống. Một phim hoạt hình cảm động, hài hước, nhắc nhở về tình bạn, sự trưởng thành và giá trị của những kỷ niệm. (Animation, Family)s',
    },
    {
        id: '4',
        name: "The King's Speech",
        category: ['History', 'Drama'],
        releaseYear: 2010,
        country: 'UK',
        director: 'Tom Hooper',
        actors: ['Colin Firth', 'Geoffrey Rush', 'Helena Bonham Carter'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/the-kings-speech.jpg',
        views: 10,
        rate: 4,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Colin Firth hóa thân thành vua George VI, người Anh, trong hành trình vượt qua chứng nói ngọng. Một phim lịch sử đầy cảm hứng, về lòng dũng cảm, sức mạnh tinh thần và sự quyết tâm vượt qua nghịch cảnh. (History, Drama)',
    },
    {
        id: '5',
        name: 'Black Swan',
        category: ['Drama', 'Horror'],
        releaseYear: 2010,
        country: 'USA',
        director: 'Darren Aronofsky',
        actors: ['Natalie Portman', 'Mila Kunis', 'Vincent Cassel'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/black-swan.jpg',
        views: 10,
        rate: 4,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Natalie Portman tỏa sáng trong vai Nina Sayers, một vũ công tham vọng bị ám ảnh bởi vở ballet "Hồ Thiên Nga". Một phim tâm lý kinh dị đen tối, khám phá sự hủy hoại của tham vọng và những mặt tối của đam mê nghệ thuật. (Drama, Horror)',
    },
    {
        id: '6',
        name: 'The Help',
        category: ['Drama'],
        releaseYear: 2011,
        country: 'USA',
        director: 'Tate Taylor',
        actors: ['Emma Stone', 'Viola Davis', 'Octavia Spencer'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/the-help.jpg',
        views: 10,
        rate: 4.05,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Một bản hùng ca về tình bạn và nữ quyền, xoay quanh mối quan hệ giữa Skeeter, một cô gái da trắng, và Aibileen, người giúp việc da đen, trong bối cảnh phân biệt chủng tộc của miền Nam nước Mỹ. (Drama)',
    },
    {
        id: '7',
        name: 'Mad Max: Fury Road',
        category: ['Action', 'Sci-Fi'],
        releaseYear: 2015,
        country: 'Australia',
        director: 'George Miller',
        actors: ['Charlize Theron', 'Tom Hardy', 'Nicholas Hoult'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/mad-max-fury-road.jpg',
        views: 10,
        rate: 4.25,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Charlize Theron dẫn đầu đoàn xe chiến binh nữ trong cuộc chiến sinh tồn đầy adrenaline trên sa mạc. Một phim hành động hoành tráng, đầy tính nữ quyền và hình ảnh mãn nhãn. (Action, Sci-Fi)',
    },
    {
        id: '8',
        name: 'Parasite',
        category: ['Drama', 'Horror'],
        releaseYear: 2019,
        country: 'South Korea',
        director: 'Bong Joon-ho',
        actors: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/parasite.jpg',
        views: 10,
        rate: 4.4,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Một gia đình nghèo Hàn Quốc tìm cách ký sinh vào một gia đình giàu có, dẫn đến những bi kịch và mâu thuẫn xã hội. Một phim châm biếm hài đen, lật tẩy những bất công và mặt tối của chủ nghĩa tư bản. (Drama, Horror)',
    },
    {
        id: '9',
        name: 'The Grand Budapest Hotel',
        category: ['Comedy', 'Drama'],
        releaseYear: 2014,
        country: 'USA',
        director: 'Wes Anderson',
        actors: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/the-grand-budapest-hotel.jpg',
        views: 10,
        rate: 4.05,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Wes Anderson mang đến một thế giới màu sắc và hài hước trong câu chuyện về một nhân viên phục vụ ở khách sạn sang trọng, trong bối cảnh chiến tranh và trộm cắp bí ẩn. (Comedy, Drama)',
    },
    {
        id: '10',
        name: 'Iron Man',
        category: ['Action', 'Adventure'],
        releaseYear: 2008,
        country: 'USA',
        director: 'Jon Favreau',
        actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Jeff Bridges'],
        poster: 'https://webserver-l2tp.onrender.com/files/images/iron-man.jpg',
        views: 10,
        rate: 3.95,
        linkFilm:
            'https://drive.google.com/file/d/1i8ZZahNukxku7rMBwPsk_3FUKnmVDDjX/preview',
        description:
            'Robert Downey Jr. trở thành Iron Man, người hùng công nghệ, trong một bộ phim khởi đầu cho vũ trụ điện ảnh Marvel. Một phim hành động phiêu lưu, ngợi ca tinh thần anh hùng và sức mạnh của công nghệ. (Action, Adventure)s',
    },
];

export default films;
