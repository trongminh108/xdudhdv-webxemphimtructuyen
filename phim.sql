-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 09, 2024 lúc 01:46 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `phim`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `daodien`
--

CREATE TABLE `daodien` (
  `id` varchar(255) NOT NULL,
  `ten_dao_dien` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `daodien`
--

INSERT INTO `daodien` (`id`, `ten_dao_dien`) VALUES
('1', 'Steve Pink'),
('2', 'Michael Thurmeier'),
('3', 'Edgar Wright'),
('4', 'Guy Ritchie'),
('5', 'Gore Verbinski');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dienvien`
--

CREATE TABLE `dienvien` (
  `id` varchar(255) NOT NULL,
  `ten_dien_vien` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `dienvien`
--

INSERT INTO `dienvien` (`id`, `ten_dien_vien`) VALUES
('1', 'Justin Long'),
('10', 'Robert Downey Jr.'),
('11', 'Jude Law'),
('12', 'Rachel McAdams'),
('13', 'Johnny Depp'),
('14', 'Orlando Bloom'),
('15', 'Keira Knightley'),
('2', 'Jonah Hill'),
('3', 'Blake Lively'),
('4', 'John Leguizamo'),
('5', 'Ray Romano'),
('6', 'Denis Leary'),
('7', 'Ansel Elgort'),
('8', 'Kevin Spacey'),
('9', 'Lily James');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `file_data`
--

CREATE TABLE `file_data` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `file_data`
--

INSERT INTO `file_data` (`id`, `name`, `type`, `file_path`) VALUES
(9, 'avatar.jpg', 'image/jpeg', 'E:\\MinhTrongs Files\\University_AGU\\Semester_7\\XayDungUngDungHuongDichVu\\Doan\\tgex\\file_upload\\poster\\avatar.jpg'),
(10, 'avatar.jpg', 'image/jpeg', 'E:\\MinhTrongs Files\\University_AGU\\Semester_7\\XayDungUngDungHuongDichVu\\Doan\\tgex\\file_upload\\poster\\avatar.jpg'),
(11, 'DoraemonVSCode.png', 'image/png', 'E:\\MinhTrongs Files\\University_AGU\\Semester_7\\XayDungUngDungHuongDichVu\\Doan\\tgex\\file_upload\\poster\\DoraemonVSCode.png'),
(12, 'accepted.jpg', 'image/jpeg', 'E:\\MinhTrongs Files\\University_AGU\\Semester_7\\XayDungUngDungHuongDichVu\\Doan\\tgex\\file_upload\\poster\\accepted.jpg'),
(13, 'ice-age-5.jpg', 'image/jpeg', 'E:\\MinhTrongs Files\\University_AGU\\Semester_7\\XayDungUngDungHuongDichVu\\Doan\\tgex\\file_upload\\poster\\ice-age-5.jpg'),
(14, 'pirates-of-caribbean-the-curse-of-the-black-pearl-2003.jpg', 'image/jpeg', 'E:\\MinhTrongs Files\\University_AGU\\Semester_7\\XayDungUngDungHuongDichVu\\Doan\\tgex\\file_upload\\poster\\pirates-of-caribbean-the-curse-of-the-black-pearl-2003.jpg'),
(15, 'sherlock-holmes-2009.jpg', 'image/jpeg', 'E:\\MinhTrongs Files\\University_AGU\\Semester_7\\XayDungUngDungHuongDichVu\\Doan\\tgex\\file_upload\\poster\\sherlock-holmes-2009.jpg'),
(16, 'baby-driver.jpg', 'image/jpeg', 'E:\\MinhTrongs Files\\University_AGU\\Semester_7\\XayDungUngDungHuongDichVu\\Doan\\tgex\\file_upload\\poster\\baby-driver.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phim`
--

CREATE TABLE `phim` (
  `id` varchar(255) NOT NULL,
  `ten_viet_tat` varchar(255) DEFAULT NULL,
  `ten_phim` varchar(255) DEFAULT NULL,
  `nam_phat_hanh` int(11) DEFAULT NULL,
  `quoc_gia` varchar(255) DEFAULT NULL,
  `dao_dien` varchar(255) DEFAULT NULL,
  `loai_phim` varchar(255) DEFAULT NULL,
  `link_phim` varchar(255) DEFAULT NULL,
  `luot_xem` int(11) DEFAULT NULL,
  `danh_gia` float DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `mo_ta` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `phim`
--

INSERT INTO `phim` (`id`, `ten_viet_tat`, `ten_phim`, `nam_phat_hanh`, `quoc_gia`, `dao_dien`, `loai_phim`, `link_phim`, `luot_xem`, `danh_gia`, `poster`, `mo_ta`) VALUES
('1', 'accepted', 'Accepted', 2006, '1', '1', '1', 'https://drive.google.com/file/d/1yNp1lrbFGopwcl_R-vrpV9zcE3EsVna_/preview', 11, 3.2, 'accepted.jpg', 'A high school slacker who\'s rejected by every school he applies to opts to create his own institution of higher learning, the South Harmon Institute of Technology, on a rundown piece of property near his hometown.'),
('2', 'ice-age-5', 'Ice Age 5', 2016, '1', '2', '1', 'https://drive.google.com/file/d/186i69w8eDyLXmNxZb4gBm4XO9dCL3J7p/preview', 22, 2.85, 'ice-age-5.jpg', 'When Scrat\'s acorn sends an asteroid to Earth, the Herd must find a way to stop the asteroid from hitting Earth with the help of a returning friend.'),
('3', 'baby-driver', 'Baby Driver', 2017, '1', '3', '1', 'https://drive.google.com/file/d/1R187yDfe55wGJWHYYJ1cEuD-Dev4RFLa/preview', 33, 3.75, 'baby-driver.jpg', 'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.'),
('4', 'sherlock-holmes-2009', 'Sherlock Holmes (2009)', 2009, '1', '4', '1', 'https://drive.google.com/file/d/1m3TOE2gGm8ttmcfaInZqa2MjDRO3JuMl/preview', 44, 3.8, 'sherlock-holmes-2009.jpg', 'Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.'),
('5', 'pirates-of-caribbean-the-curse-of-the-black-pearl-2003', 'Pirates Of The Caribbean - The Curse of the Black Pearl (2003)', 2003, '1', '5', '1', 'https://drive.google.com/file/d/1SE_yXK6kNQlBDm8MBDhJz8dBnrMr7b1o/preview', 55, 4.05, 'pirates-of-caribbean-the-curse-of-the-black-pearl-2003.jpg', 'Blacksmith Will Turner teams up with eccentric pirate \'Captain\' Jack Sparrow to save his love, the governor\'s daughter, from Jack\'s former pirate allies, who are now undead.');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phim_dienvien`
--

CREATE TABLE `phim_dienvien` (
  `id` varchar(255) NOT NULL,
  `id_phim` varchar(255) DEFAULT NULL,
  `id_dien_vien` varchar(255) DEFAULT NULL,
  `nhan_vat` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `phim_dienvien`
--

INSERT INTO `phim_dienvien` (`id`, `id_phim`, `id_dien_vien`, `nhan_vat`) VALUES
('1', '1', '1', 'Bartleby Gaines'),
('10', '4', '10', 'Sherlock Holmes'),
('11', '4', '11', 'Dr. John Watson'),
('12', '4', '12', 'Irene Adler'),
('13', '5', '13', 'Captain Jack'),
('14', '5', '14', 'Will Turner'),
('15', '5', '15', 'Elizabeth Swann'),
('2', '1', '2', 'Sherman Schrader'),
('3', '1', '3', 'Monica Moreland'),
('4', '2', '4', 'Sid'),
('5', '2', '5', 'Manny'),
('6', '2', '6', 'Diego'),
('7', '3', '7', 'Baby'),
('8', '3', '8', 'Doc'),
('9', '3', '9', 'Debora');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phim_theloai`
--

CREATE TABLE `phim_theloai` (
  `id` varchar(255) NOT NULL,
  `id_phim` varchar(255) DEFAULT NULL,
  `id_the_loai` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `phim_theloai`
--

INSERT INTO `phim_theloai` (`id`, `id_phim`, `id_the_loai`) VALUES
('1', '1', '1'),
('10', '4', '5'),
('11', '5', '2'),
('12', '5', '4'),
('13', '5', '6'),
('2', '2', '1'),
('3', '2', '2'),
('4', '2', '3'),
('5', '3', '4'),
('6', '3', '7'),
('7', '3', '8'),
('8', '4', '2'),
('9', '4', '4');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quocgia`
--

CREATE TABLE `quocgia` (
  `id` varchar(255) NOT NULL,
  `ten_quoc_gia` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `quocgia`
--

INSERT INTO `quocgia` (`id`, `ten_quoc_gia`) VALUES
('1', 'USA'),
('2', 'India'),
('3', 'China'),
('4', 'Japan'),
('5', 'Korean');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `ten_tai_khoan` varchar(255) NOT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `gmail` varchar(255) DEFAULT NULL,
  `loai_quyen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`ten_tai_khoan`, `mat_khau`, `gmail`, `loai_quyen`) VALUES
('admin', 'admin', 'admin@gmail.com', 1),
('user1', 'user1', 'user1@gmail.com', 2),
('user2', 'user2', 'user2@gmail.com', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `test`
--

CREATE TABLE `test` (
  `id` int(255) NOT NULL,
  `ho_ten` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `test`
--

INSERT INTO `test` (`id`, `ho_ten`) VALUES
(1, 'trongluu'),
(2, 'minh'),
(3, 'minh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `theloai`
--

CREATE TABLE `theloai` (
  `id` varchar(255) NOT NULL,
  `ten_the_loai` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `theloai`
--

INSERT INTO `theloai` (`id`, `ten_the_loai`) VALUES
('1', 'Comedy'),
('2', 'Adventure'),
('3', 'Animation'),
('4', 'Action'),
('5', 'Mystery'),
('6', 'Fantasy'),
('7', 'Crime'),
('8', 'Drama');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `daodien`
--
ALTER TABLE `daodien`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `dienvien`
--
ALTER TABLE `dienvien`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `file_data`
--
ALTER TABLE `file_data`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `phim`
--
ALTER TABLE `phim`
  ADD PRIMARY KEY (`id`),
  ADD KEY `daoDien` (`dao_dien`),
  ADD KEY `quocGia` (`quoc_gia`);

--
-- Chỉ mục cho bảng `phim_dienvien`
--
ALTER TABLE `phim_dienvien`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPhim` (`id_phim`),
  ADD KEY `idDienVien` (`id_dien_vien`);

--
-- Chỉ mục cho bảng `phim_theloai`
--
ALTER TABLE `phim_theloai`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPhim` (`id_phim`),
  ADD KEY `idTheLoai` (`id_the_loai`);

--
-- Chỉ mục cho bảng `quocgia`
--
ALTER TABLE `quocgia`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`ten_tai_khoan`);

--
-- Chỉ mục cho bảng `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `theloai`
--
ALTER TABLE `theloai`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `file_data`
--
ALTER TABLE `file_data`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `test`
--
ALTER TABLE `test`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `phim`
--
ALTER TABLE `phim`
  ADD CONSTRAINT `phim_ibfk_1` FOREIGN KEY (`dao_dien`) REFERENCES `daodien` (`id`),
  ADD CONSTRAINT `phim_ibfk_2` FOREIGN KEY (`quoc_gia`) REFERENCES `quocgia` (`id`);

--
-- Các ràng buộc cho bảng `phim_dienvien`
--
ALTER TABLE `phim_dienvien`
  ADD CONSTRAINT `phim_dienvien_ibfk_1` FOREIGN KEY (`id_phim`) REFERENCES `phim` (`id`),
  ADD CONSTRAINT `phim_dienvien_ibfk_2` FOREIGN KEY (`id_dien_vien`) REFERENCES `dienvien` (`id`);

--
-- Các ràng buộc cho bảng `phim_theloai`
--
ALTER TABLE `phim_theloai`
  ADD CONSTRAINT `phim_theloai_ibfk_1` FOREIGN KEY (`id_phim`) REFERENCES `phim` (`id`),
  ADD CONSTRAINT `phim_theloai_ibfk_2` FOREIGN KEY (`id_the_loai`) REFERENCES `theloai` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
