use blog_my,

drop table theloai
drop table loaitin
drop table tintuc
drop table users
drop table comment

CREATE TABLE `theloai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) DEFAULT NULL,
  `status_theloai` tinyint(4) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `loaitin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_theloai` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `status_loaitin` tinyint(4) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (id_theloai) REFERENCES theloai(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tintuc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_loaitin` int(11) NOT NULL,
  `tieude` varchar(225) DEFAULT NULL,
  `tomtat` text,
  `noidung` longtext,
  `hinhanh` varchar(255) DEFAULT NULL,
  `noibat` int(11) DEFAULT NULL,
  `soluocxem` int(11) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (id_loaitin) REFERENCES loaitin(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET swe7 DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `password` mediumtext CHARACTER SET swe7,
  `hinhanh` varchar(255) CHARACTER SET swe7 DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_tintuc` int(11) DEFAULT NULL,
  `noidung` longtext,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (id_user) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

