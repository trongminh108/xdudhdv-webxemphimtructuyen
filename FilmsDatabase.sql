CREATE TABLE `PHIM` (
  `id` varchar(255) PRIMARY KEY,
  `tenVietTat` varchar(255),
  `tenPhim` varchar(255),
  `namPhatHanh` int,
  `quocGia` varchar(255),
  `daoDien` varchar(255),
  `loaiPhim` varchar(255),
  `linkPhim` varchar(255),
  `luotXem` int,
  `danhGia` float,
  `poster` varchar(255),
  `moTa` text
);

CREATE TABLE `THELOAI` (
  `id` varchar(255) PRIMARY KEY,
  `tenTheLoai` varchar(255)
);

CREATE TABLE `QUOCGIA` (
  `id` varchar(255) PRIMARY KEY,
  `tenQuocGia` varchar(255)
);

CREATE TABLE `DAODIEN` (
  `id` varchar(255) PRIMARY KEY,
  `tenDaoDien` varchar(255)
);

CREATE TABLE `DIENVIEN` (
  `id` varchar(255) PRIMARY KEY,
  `tenDienVien` varchar(255)
);

CREATE TABLE `PHIM_DIENVIEN` (
  `id` varchar(255) PRIMARY KEY,
  `idPhim` varchar(255),
  `idDienVien` varchar(255),
  `nhanvat` varchar(255)
);

CREATE TABLE `PHIM_THELOAI` (
  `id` varchar(255) PRIMARY KEY,
  `idPhim` varchar(255),
  `idTheLoai` varchar(255)
);

CREATE TABLE `TAIKHOAN` (
  `tenTaiKhoan` varchar(255) PRIMARY KEY,
  `matKhau` varchar(255),
  `gmail` varchar(255),
  `loaiQuyen` int
);

ALTER TABLE `PHIM` ADD FOREIGN KEY (`daoDien`) REFERENCES `DAODIEN` (`id`);

ALTER TABLE `PHIM` ADD FOREIGN KEY (`quocGia`) REFERENCES `QUOCGIA` (`id`);

ALTER TABLE `PHIM_DIENVIEN` ADD FOREIGN KEY (`idPhim`) REFERENCES `PHIM` (`id`);

ALTER TABLE `PHIM_THELOAI` ADD FOREIGN KEY (`idPhim`) REFERENCES `PHIM` (`id`);

ALTER TABLE `PHIM_THELOAI` ADD FOREIGN KEY (`idTheLoai`) REFERENCES `THELOAI` (`id`);

ALTER TABLE `PHIM_DIENVIEN` ADD FOREIGN KEY (`idDienVien`) REFERENCES `DIENVIEN` (`id`);
