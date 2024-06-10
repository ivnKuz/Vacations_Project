-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 09, 2024 at 02:45 AM
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
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 22),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 16),
('40f79182-32e9-444c-8fae-a59731356465', 23),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 32),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 23),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 34),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 32),
('40f79182-32e9-444c-8fae-a59731356465', 9),
('40f79182-32e9-444c-8fae-a59731356465', 26),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 23),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 22),
('848f90f1-2959-4b5b-9260-bf07913b1d39', 16),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 34),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 36),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 38),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 39),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 22),
('40f79182-32e9-444c-8fae-a59731356465', 36),
('40f79182-32e9-444c-8fae-a59731356465', 39),
('40f79182-32e9-444c-8fae-a59731356465', 38),
('40f79182-32e9-444c-8fae-a59731356465', 16),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 23),
('d2266c6b-d352-4886-bea7-e78b0a7b6b61', 22),
('d2266c6b-d352-4886-bea7-e78b0a7b6b61', 16),
('d2266c6b-d352-4886-bea7-e78b0a7b6b61', 36),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 26),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 16),
('a5e95965-7159-4c3c-a1d0-a7c37608db70', 39),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 9),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 26),
('40f79182-32e9-444c-8fae-a59731356465', 32),
('40f79182-32e9-444c-8fae-a59731356465', 34),
('40f79182-32e9-444c-8fae-a59731356465', 22),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 48),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 49),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 56),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 55),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 51),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 58),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 54),
('80d7b3c3-c865-432d-a62d-cf2fb7534735', 50),
('40f79182-32e9-444c-8fae-a59731356465', 49),
('40f79182-32e9-444c-8fae-a59731356465', 48),
('40f79182-32e9-444c-8fae-a59731356465', 56),
('40f79182-32e9-444c-8fae-a59731356465', 57),
('40f79182-32e9-444c-8fae-a59731356465', 53),
('40f79182-32e9-444c-8fae-a59731356465', 47),
('40f79182-32e9-444c-8fae-a59731356465', 50),
('40f79182-32e9-444c-8fae-a59731356465', 54),
('40f79182-32e9-444c-8fae-a59731356465', 51),
('40f79182-32e9-444c-8fae-a59731356465', 55),
('40f79182-32e9-444c-8fae-a59731356465', 52),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 23),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 26),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 32),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 22),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 48),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 36),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 49),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 16),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 39),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 38),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 50),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 53),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 54),
('8c8a47df-87a6-4ce2-95c6-1cf8a8b11d5d', 55);

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
  `id` varchar(36) NOT NULL,
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
('d2266c6b-d352-4886-bea7-e78b0a7b6b61', 1, 'tester6', 'QA', 'tester6@mail.com', 'e4b146f41c9cfd8d33c7609be85e3d0a'),
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
(9, 'Citadel, serpent Nebula', 'The dense Serpent Nebula surrounds the ancient Citadel and is one of the station\'s most effective defences. The thick gas and dust from the nebula make it impossible for enemy ships to launch an organised attack or locate the Citadel without co-ordinates. Commander Shepard can get a good view of the Serpent Nebula from the Upper Wards.', '2024-05-01', '2024-05-07', 5000, 'citadel.jpeg'),
(16, 'New York, USA', 'come and visit the most famous and hella goddam expensive city in usa, bery nice at winter cuz of movies u watched as a kid.', '2024-12-24', '2025-01-01', 40000, 'b1a86a0e-c5f8-40db-aa32-39cb86e036f4.jpg'),
(22, 'Cool Mountain, Canada', 'Some cool place in Canada, I hope there\'s a hotel for you to stay in and chill too.', '2024-05-23', '2024-05-30', 200, 'a21d7a57-5578-4af3-aae5-c99ce5a1ab6a.jpg'),
(23, 'Tokyo, Japan', 'Come visit a beautiful place deep in the forest with hot springs and georgeous views.', '2024-05-10', '2024-05-16', 9800, '066fee37-cc48-4d5a-83e0-74b2ece394b7.jpg'),
(26, 'Apple wallpaper mountains, Alps', 'quite nice mountains, come visit. If you ever saw apple\'s infamous wallpaper you probably wanted to visit this place at least once. Well, this is your chance! Come and relax with beautiful views of the infamous mountain sight.', '2024-05-10', '2024-05-15', 2000, 'e6748aea-3233-43b0-84cd-07ce1c63ac13.jpg'),
(32, 'Promenade, Nar Shadaa', 'come to nar shadaa, quite cool place if u want to gamble all your credits away. Best enterntaiment planet in the hutt space', '2024-05-15', '2024-05-30', 65, 'd322ec99-7d14-48f0-bf97-5f2fa94eabac.jpeg'),
(34, 'Hong Kong, SAR of China', 'come visit cool city of Hong Kong, bery nice place, visit cool stuff in the city.', '2024-05-15', '2024-05-30', 7500, 'a6e5e6b6-6d42-4b53-96cf-c0864a0f70b9.webp'),
(36, 'Paradise lost, Haiti', 'come visit a half island \"Paradise Lost\" near the Coribean sea! Magnificent views!', '2024-05-31', '2024-06-20', 7500, '6cfaa575-200b-478a-bec1-376eef771825.webp'),
(38, 'Edo, Japan', 'Visit infamous Edo in Japan, here you will learn a lot about crucial moments in Japan\'s history and more!', '2024-09-11', '2024-11-06', 9999, 'cd92daa0-9695-4097-bc91-dfa79291fb01.jpg'),
(39, 'Tsushima, Japan', 'Tsushima is beautiful choice if you like gorgeous sights at this time of the year especially! ', '2024-09-11', '2024-10-15', 6500, 'a88f66d2-86bf-4bc1-a6b1-77d398e2fca7.jpg'),
(47, 'Mitre Peak, New Zealand', 'Mitre Peak is difficult to reach and as a result ascent attempts are relatively infrequent. The first known attempt of the peak was in 1883 by Invercargill artist Samuel Mereton, and Donald Sutherland. The pair took a boat to Sinbad Bay on 6 February and camped at the head of the valley.', '2024-06-11', '2024-06-26', 5500, '50a65d27-c5f3-4e05-980f-15d50a46b8b9.jpg'),
(48, 'Jerusalem, Israel', 'Jerusalem - is a city in the Southern Levant, on a plateau in the Judaean Mountains between the Mediterranean and the Dead Sea. It is one of the oldest cities in the world, and is considered holy to the three major Abrahamic religions—Judaism, Christianity, and Islam.', '2024-06-09', '2024-06-18', 3500, '7f8d2957-fee2-4788-9069-9580434f15d6.webp'),
(49, 'Movie Spot, New Zealand', 'Visit infamous locations from lord of the rings movie trilogy. Lands of Rohan await you!', '2024-06-09', '2024-06-28', 9999, '4946e67e-c19e-470d-ba11-29ca0bf895e0.jpg'),
(50, 'The Shire, New Zealand.', 'Visit infamous Lord Of The Rings movie spot, The Shire! Yes, the very same spot where our 4 legendary hobbits were originally from. ', '2024-06-10', '2024-06-27', 2000, '4be09e4b-cf71-457b-ac12-398929bade85.jpg'),
(51, 'Giza, Egypt', 'Giza is most famous as the location of the Giza Plateau, the site of some of the most impressive ancient monuments in the world, including a complex of ancient Egyptian royal mortuary and sacred structures, among which are the Great Sphinx, the Great Pyramid of Giza, and a number of other large pyramids and temples. Giza has always been a focal point in Egypt\'s history due to its location close to Memphis, the ancient pharaonic capital of the Old Kingdom.', '2024-06-12', '2024-06-30', 5549, '15f3bffb-0ea7-4322-b46f-fe8a685bc653.png'),
(52, 'Oslo, Norway', 'Oslo, the capital of Norway, sits on the country’s southern coast at the head of the Oslofjord. It’s known for its green spaces and museums. Many of these are on the Bygdøy Peninsula, including the waterside Norwegian Maritime Museum and the Viking Ship Museum, with Viking ships from the 9th century. The Holmenkollbakken is a ski-jumping hill with panoramic views of the fjord. It also has a ski museum.', '2024-12-10', '2025-01-05', 9250, '58e70340-5e78-4d2f-b744-9a71fdf49a97.jpg'),
(53, 'Lofoten, Norway', 'Lofoten is an archipelago in Norway. Its known for its dramatic scenery, with peaks like the Svolværgeita pinnacle jutting up into the sky. Himmeltindan Mountain sits on Vestvågøya Island. The nearby Lofotr Viking Museum features a Viking longhouse reconstruction. Cycle routes cover the islands, passing through fishing villages like Henningsvær, which has colorful buildings lining its waterways. ', '2024-06-20', '2024-07-05', 4899, '390f98ec-8cae-4996-bbaa-3e878cf579b8.jpg'),
(54, 'Bergen, Norway', 'Bergen is a city on Norway’s southwestern coast. It\'s surrounded by mountains and fjords, including Sognefjord, the country’s longest and deepest. Bryggen features colorful wooden houses on the old wharf, once a center of the Hanseatic League\'s trading empire. The Fløibanen Funicular goes up Fløyen Mountain for panoramic views and hiking trails. The Edvard Grieg House is where the renowned composer once lived.', '2024-06-10', '2024-06-26', 3499, '16cd985a-3350-4cb7-8b0c-b6d459c394a2.jpg'),
(55, 'Glacier National Park, USA', 'Glacier National Park is a 1,583-sq.-mi. wilderness area in Montana\'s Rocky Mountains, with glacier-carved peaks and valleys running to the Canadian border. It\'s crossed by the mountainous Going-to-the-Sun Road. Among more than 700 miles of hiking trails, it has a route to photogenic Hidden Lake. Other activities include backpacking, cycling and camping. Diverse wildlife ranges from mountain goats to grizzly bears.', '2024-07-10', '2024-07-30', 7800, '9f99d68c-7786-4d27-bb52-68551f6b0dec.jpg'),
(56, 'Lake Tahoe, USA', 'Lake Tahoe is a large freshwater lake in the Sierra Nevada Mountains, straddling the border of California and Nevada. It’s known for its beaches and ski resorts. On the southwest shore, Emerald Bay State Park contains the 1929 Nordic-style mansion Vikingsholm. Along the lake’s northeast side, Lake Tahoe Nevada State Park includes Sand Harbor Beach and Spooner Lake, a gateway to the long-distance Tahoe Rim Trail. ', '2024-08-15', '2024-08-31', 6899, '27a1ffde-397f-4928-b32b-aaa2640c4aab.jpg'),
(57, 'Kyoto, Japan', 'Kyoto is one of the oldest municipalities in Japan, having been chosen in 794 as the new seat of Japan\'s imperial court by Emperor Kanmu. The original city, named Heian-kyō, was arranged in accordance with traditional Chinese feng shui following the model of the ancient Chinese capitals of Chang\'an and Luoyang. The emperors of Japan ruled from Kyoto in the following eleven centuries until 1869.', '2024-09-10', '2024-09-30', 8799, 'd1551064-0c1c-4abe-bea7-532fd43a31b5.jpg'),
(58, 'Forbidden City, Beijing, China', 'The Palace Museum is a large national museum complex housed in the Forbidden City at the core of Beijing, China. With 720,000 square metres, the museum inherited the imperial royal palaces from the Ming and Qing dynasties of China and opened to the public in 1925 after the last Emperor of China was evicted.', '2024-06-18', '2024-07-01', 3299, 'c95151f9-eea9-4a43-92df-12a91b43fe95.jpg');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

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
