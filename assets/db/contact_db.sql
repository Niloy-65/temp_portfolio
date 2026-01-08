-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2024 at 09:20 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contact_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(6) UNSIGNED NOT NULL,
  `sender` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `sender`, `email`, `message`, `reg_date`) VALUES
(1, 'Akbar', 'samratakbar666666@gmail.com', 'fsdffsdffsdf', '2024-09-02 06:39:03'),
(2, 'Akbar', 'samratakbar666666@gmail.com', 'Hello niloy , I need a blog site .', '2024-09-02 06:49:01'),
(3, 'Akbar', 'samratakbar666666@gmail.com', 'hfwjkadfhsjkdcfsd', '2024-09-02 06:55:44'),
(4, 'jkkkk', 'samratakbar666666@gmail.com', 'koij', '2024-09-02 06:56:07'),
(5, 'Akbar', 'samratakbar666666@gmail.com', 'dfsafsdfsdf', '2024-09-02 07:06:19'),
(6, 'Akbar', 'samratakbar666666@gmail.com', 'xzCzC', '2024-09-02 07:07:52'),
(7, 'Akbar', 'samratakbar666666@gmail.com', 'dfsdafsdfsdfsd', '2024-09-02 07:11:37'),
(8, 'Akbar', 'samratakbar666666@gmail.com', 'sdffasfdssss', '2024-09-02 07:17:29'),
(9, 'dfdsdfsdfdfsda', 'samratakbar666666@gmail.com', 'sjkdfsdafj', '2024-09-02 07:18:53'),
(10, 'dfsdaf', 'samratakbar666666@gmail.com', 'sjkdfsdafj', '2024-09-02 07:19:11'),
(11, 'jkkkk', 'samratakbar666666@gmail.com', 'jhgh', '2024-09-02 07:19:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
