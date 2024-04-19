-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 19, 2024 at 10:30 AM
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
('303c964a-f7d4-11ee-8eed-96c860496580', 4),
('303c964a-f7d4-11ee-8eed-96c860496580', 6),
('303c964a-f7d4-11ee-8eed-96c860496580', 5),
('303c964a-f7d4-11ee-8eed-96c860496580', 7);

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
('303c964a-f7d4-11ee-8eed-96c860496580', 1, 'Zohan', 'DontMessWith', 'zohan444@gmail.com', 'caba051e552aefbbfa144d8155dac7da'),
('3296667a-f354-11ee-a803-96c860496580', 1, 'tester111', 'QA', 'tester111@mail.com', '9104fad76b5b5212c0994b65d46fe9d0'),
('7aa9d3d4-f354-11ee-a803-96c860496580', 1, 'actualsignupName', 'QA', 'tester222@mail.com', '617e4c6a46121c6e2388462a93f8af80'),
('7d927cce-f352-11ee-a803-96c860496580', 1, 'tester', 'lol', 'test134@mail.com', 'caba051e552aefbbfa144d8155dac7da'),
('89264424-759a-4bb3-849d-06735af10b0d', 1, 'testuuid', 'QA', 'tester436@mail.com', '617e4c6a46121c6e2388462a93f8af80'),
('b086d426-f51f-11ee-8eed-96c860496580', 1, 'JarJar', 'Binks', 'Binks@mail.com', 'caba051e552aefbbfa144d8155dac7da'),
('f0f7ee4c-f352-11ee-a803-96c860496580', 1, 'tester222', 'lol', 'test124@mail.com', 'caba051e552aefbbfa144d8155dac7da'),
('fee5be10-f345-11ee-a803-96c860496580', 1, 'test555', 'QA', 'tester555@mail.com', '9104fad76b5b5212c0994b65d46fe9d0');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` int(11) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`id`, `destination`, `description`, `startDate`, `endDate`, `price`, `imageName`) VALUES
(3, 'Tokyo, Japan', 'Visit capital of Japan\'s 5 star hotel. Travel in the streets of Tokyo, visit pubs and all sorts of stores. You\'ll find your time here quite enjoyable!', '2024-03-20', '2024-04-10', 10999, 'Tokyo.jpg'),
(4, 'Santorini, Greece', 'Santorini is an island in the southern Aegean Sea, about 200 km (120 mi) southeast from the Greek mainland. Come and visit this beautiful island in the hotel with the nicest view!', '2024-04-06', '2024-04-20', 6000, 'Santorini.jpg'),
(5, 'Citadel, Space', 'Citadel is my favorite place in the galaxy', '2024-04-11', '2024-04-19', 10000, 'citadel.png'),
(6, 'Citadel, The Serpent Nebula', 'something well described as this vacation, such a great vacation, so good, buy it now, but fast or u miss out. holy moly this vacation is the best, better buy while u can btw. DO buy it yes.', '2024-05-10', '2024-05-23', 99999, 'myFavoriteStore.jpeg'),
(7, 'New York, USA', 'New York is a noice place especially at winter, and bla bla bla bla bla blabalbalbablalblalalbalbablbl rrarararar arar ra ', '2024-04-02', '2024-04-09', 9999, 'new_york.jpeg');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
