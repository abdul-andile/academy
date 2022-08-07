CREATE DATABASE `northino` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE `customersmessages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email_address` varchar(45) NOT NULL,
  `message` longtext NOT NULL,
  `is_replied` int NOT NULL DEFAULT '0',
  `message_id` varchar(255) DEFAULT NULL,
  `phone_number` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `northino_tv` (
  `id` int NOT NULL AUTO_INCREMENT,
  `section_type` varchar(45) DEFAULT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `video_title` varchar(45) DEFAULT NULL,
  `video_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `subscribers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email_address` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
