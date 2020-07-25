CREATE DATABASE `bienes_raices`;


CREATE TABLE `contactos`(
    `id` int(11) NOT NULL,
    `nombre` varchar(60) NOT NULL,
    `correo` varchar(40) NOT NULL,
    `telefono` varchar(20) NOT NULL,
    `mensaje` varchar(80) NOT NULL,
    `opcion` varchar(25) NOT NULL,
    `cantidad` varchar(30) NOT NULL,
    `metodo` varchar(30) NOT NULL,
    `fecha` varchar(30) NOT NULL,
    `hora` varchar(30) NOT NULL
);

ALTER TABLE `contactos`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `contactos`
   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;