-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2025 a las 18:29:54
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `neonnews`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `content` longtext NOT NULL,
  `category` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `id_user`, `title`, `img`, `content`, `category`, `created_at`, `updated_at`) VALUES
(1, 1, 'Poderes de Tracer para Stadium', 'xA4gk3bz.png', 'Lorem fistrum pecador ahorarr me cago en tus muelas tiene musho peligro officia. Ut al ataquerl tempor voluptate sed ut aliqua consequat enim. La caidita laboris diodeno apetecan a wan ullamco ese que llega qué dise usteer ex dolor sit amet. Ut ex papaar papaar consequat magna tempor está la cosa muy malar ahorarr commodo sexuarl nisi. Ahorarr sexuarl jarl no te digo trigo por no llamarte Rodrigor sed jarl jarl magna.\r\n\r\nDolor veniam tiene musho peligro velit de la pradera. Ese que llega apetecan fistro sit amet sit amet quis. Benemeritaar tiene musho peligro elit minim ad qué dise usteer. Consequat al ataquerl no te digo trigo por no llamarte Rodrigor a wan. Mamaar nisi ese hombree incididunt diodeno qué dise usteer de la pradera sexuarl. Aute la caidita está la cosa muy malar hasta luego Lucas adipisicing adipisicing jarl me cago en tus muelas aute ex quis.\r\n\r\nMe cago en tus muelas sexuarl voluptate velit magna no puedor. Consectetur diodeno dolore diodeno aliquip velit. Magna elit fistro aliquip te va a hasé pupitaa ahorarr está la cosa muy malar magna te voy a borrar el cerito papaar papaar. Elit dolore veniam no puedor irure ese pedazo de a gramenawer pecador ut no te digo trigo por no llamarte Rodrigor. Fistro no puedor consequat ullamco. Papaar papaar mamaar dolor caballo blanco caballo negroorl pecador eiusmod. Sit amet cillum ex pecador no te digo trigo por no llamarte Rodrigor la caidita. De la pradera commodo aliqua ex diodeno nisi está la cosa muy malar quietooor no puedor enim.', 'Overwatch', '2025-06-07 11:36:53', '2025-06-07 11:36:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img_profile` varchar(255) DEFAULT 'default_profile.jpg',
  `bio` text DEFAULT NULL,
  `img_bg` varchar(255) DEFAULT 'default_bg.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `img_profile`, `bio`, `img_bg`) VALUES
(1, 'Balatro Balatrez', 'balatroBalatrez@gmail.com', '1234', 'usuario.webp', 'Como dijo un sabio: “Si no Juegas Balatro no ganas”.Así que hazme caso y juega Balatro.Muy guapo NeonNews por cierto.', 'spiderman.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);
ALTER TABLE `posts` ADD FULLTEXT KEY `title` (`title`,`content`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
