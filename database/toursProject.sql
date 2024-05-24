-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 24, 2024 at 12:21 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `toursProject`
--
CREATE DATABASE IF NOT EXISTS `toursProject` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `toursProject`;

-- --------------------------------------------------------

--
-- Table structure for table `Followers`
--

CREATE TABLE `Followers` (
  `userId` varchar(255) NOT NULL,
  `vocationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Followers`
--

INSERT INTO `Followers` (`userId`, `vocationId`) VALUES
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 12),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 9),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 16),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 22),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 21),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 22),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 16),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 12),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 21),
('40f79182-32e9-444c-8fae-a59731356465', 23),
('40f79182-32e9-444c-8fae-a59731356465', 24),
('40f79182-32e9-444c-8fae-a59731356465', 21),
('40f79182-32e9-444c-8fae-a59731356465', 14),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 26),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 9),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 21),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 33),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 27),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 29),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 32),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 23),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 29),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 26),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 34),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 32),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 27),
('40f79182-32e9-444c-8fae-a59731356465', 9),
('40f79182-32e9-444c-8fae-a59731356465', 26),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 23),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 12),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 33),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 27),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 21),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 22),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 16),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 14);

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `roleName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `roleName`) VALUES
(1, 'User'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `roleId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `roleId`, `name`, `lastName`, `email`, `password`) VALUES
('40f79182-32e9-444c-8fae-a59731356465', 1, 'test5', 'QA5', 'tester5@mail.com', 'e4b146f41c9cfd8d33c7609be85e3d0a'),
('61537bde-6360-406e-9571-c13e744f7a07', 2, 'Evanikus', 'QA', 'tester@mail.com', 'e4b146f41c9cfd8d33c7609be85e3d0a'),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 1, 'JarJar', 'Binks', 'Binks@mail.com', 'e4b146f41c9cfd8d33c7609be85e3d0a'),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 1, 'Evanikus', 'Highground', 'Evanikus@gmoil.com', 'd10de999ac7fc66f6603c89f657d1b69'),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 1, 'Ivan', 'Unemplyed', 'unemployed@mail.com', 'e4b146f41c9cfd8d33c7609be85e3d0a'),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 1, 'Zohan', 'DontMessWith', 'zohan444@gmail.com', 'e4b146f41c9cfd8d33c7609be85e3d0a'),
('ef54c064-cd90-4bf6-9c7f-cab694a69e9f', 2, 'Admin', 'Adminovich', 'admin@mail.com', '57695ddbf891860c3e05c27903108f47');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` int(11) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`id`, `destination`, `description`, `startDate`, `endDate`, `price`, `imageName`) VALUES
(9, 'Citadel, serpent Nebula', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', '2024-05-01', '2024-05-07', 5000, 'citadel.jpeg'),
(12, 'newer vacation', 'lwqowrqwjkeqwnfkjdkhfbweqfewhfhweifuhbjwebfklwejhjfewjfknewbgfbkjwenfbjhewbfkwenhjfbewkfnbghwejbfknwebhjfbewjbfjhwefwe', '2024-05-13', '2024-05-16', 200, '96b862ed-8c60-4150-b18e-a8c5184a622f.jpg'),
(14, 'backrooms', 'Come and visit, or don\'t come you can fall into the backrooms by the accident, by clipping through the floor lewl', '2024-05-29', '2024-06-19', 6000, 'cdadbf02-7f16-45c5-b7d5-ce75d3197019.png'),
(16, 'New York, USA', 'come and visit the most famous and hella goddam expensive city in usa, bery nice at winter cuz of movies u watched as a kid.', '2024-12-24', '2025-01-01', 40000, 'b1a86a0e-c5f8-40db-aa32-39cb86e036f4.jpg'),
(21, 'Mountain dew, Norway', 'drinkin chai is good, but drinking chai at Norway mountains is way better!', '2024-05-24', '2024-05-31', 7000, '274a615a-958a-4c29-9db0-7837887809b9.jpg'),
(22, 'Cool Mountain, Canada', 'Some cool place in Canada, I hope there\'s a hotel for you to stay in and chill too.', '2024-05-23', '2024-05-30', 200, 'a21d7a57-5578-4af3-aae5-c99ce5a1ab6a.jpg'),
(23, 'Tokyo, Japan', 'tasty bike', '2024-05-10', '2024-05-16', 200, '066fee37-cc48-4d5a-83e0-74b2ece394b7.jpg'),
(24, 'Level 177, Backrooms', 'well, you can not buy it, but you can still end up in the backrooms, and what better place than chill poolrooms vibe synthwave vaporwave level', '2024-05-24', '2024-05-30', 2000, 'b90d50bb-05e1-4588-9d2c-d62b314527f9.jpg'),
(26, 'test', 'testitty testing QA', '2024-05-10', '2024-05-15', 200, 'e6748aea-3233-43b0-84cd-07ce1c63ac13.jpg'),
(27, 'city, Coruscant', 'Coruscant also known as Jewel of the Core Worlds, or Imperial Center during the rule of the Galactic Empire, was an ecumenopolis—a city-covered planet, collectively known as Imperial City— in the Coruscant system of the Core Worlds. ', '2024-05-17', '2024-05-31', 10000, 'e1b49ba5-aed7-40db-9682-fe7b75dc7eab.webp'),
(29, 'yokohama, japan', 'Coruscant (pronounced /\'kɔɹəsɑnt/), also known as Jewel of the Core Worlds, or Imperial Center during the rule of the Galactic Empire, was an ecumenopolis—a city-covered planet, collectively known as Imperial City— in the Coruscant system of the Core Worlds. and also lorem with lorem ipsum that is japan but coruscant', '2024-05-12', '2024-05-13', 2000, 'b79828bb-a12b-4845-9c83-f0dcdc7c4561.jpg'),
(32, 'Promenade, Nar Shadaa', 'come to nar shadaa, bery cool place if u wanna gamble all your credits away. Best enterntaiment planet in the hutt space', '2024-05-15', '2024-05-30', 65, 'd322ec99-7d14-48f0-bf97-5f2fa94eabac.jpeg'),
(33, 'Lorem2, Lorem Ipsum2', 'test', '2024-05-13', '2024-05-16', 200, '3133add8-aa14-405a-9a43-40b6f99dc408.jpeg'),
(34, 'Hong Kong, SAR of China', 'come visit cool city of Hong Kong, bery nice place, visit cool stuff in the city.', '2024-05-15', '2024-05-30', 7500, 'a6e5e6b6-6d42-4b53-96cf-c0864a0f70b9.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Followers`
--
ALTER TABLE `Followers`
  ADD KEY `vocationId` (`vocationId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Followers`
--
ALTER TABLE `Followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`vocationId`) REFERENCES `vacations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
