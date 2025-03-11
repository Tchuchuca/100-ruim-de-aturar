SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `academias` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `nome` varchar (255) not null,
    `proprietario` varchar(80) not null,
    `endereco` varchar(255) not null,
    `email` varchar(255) not null,
    `usuario` varchar(30) not null,
    `senha` varchar(30) not null
);

CREATE TABLE `alunos` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `nome` varchar (255) not null,
    `data de nascimento` date not null,
    `sexo` enum(`M`, `F`) not null,
    `endereco` varchar(255) not null,
    `email` varchar(255) not null,
    `usuario` varchar(30) not null,
    `senha` varchar(30) not null
);
INSERT INTO `alunos` (`nome`, `data de nascimento`, `sexo`, `endereco`, `email`, `usuario`, `senha`) VALUES
(`Dudu Pressão`, `2008-02-17`, `M`, `Rua Santa Tereza N° 500`, `dudupressão@gmail.com`, `Dudu`, `pressure`)

CREATE TABLE `instrutores` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `nome` varchar (255) not null,
    `data de nascimento` date not null,
    `sexo` enum(`M`, `F`) not null,
    `email` varchar(255) not null,
    `usuario` varchar(30) not null,
    `senha` varchar(30) not null
);

CREATE TABLE `equipamentos` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `nome` varchar(150) not null,
    `funcao` varchar(255)
);