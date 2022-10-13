-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: grupo8esushidb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS grupo8esushidb;
CREATE DATABASE grupo8esushidb;
USE grupo8esushidb;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Nigiri'),(2,'Sashimi'),(3,'Geisha'),(4,'Veggie'),(5,'Rolls'),(6,'Entradas'),(7,'Tablas combinadas'),(8,'Menú Ejecutivo');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(400) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_FK` (`category_id`),
  CONSTRAINT `product_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (38,'Sashimi de Salmón (4 unidades)','4 unidades de Sashimi de Salmón.',1000,'producto-1665534829268.jpg',2),(39,'Sashimi de Atún Rojo (4 unidades)','4 unidades de Sashimi de atún rojo.',1200,'producto-1665534948699.jpg',2),(40,'Nigiri Veggie (4 unidades)','4 unidades de Nigiri de Palta',500,'producto-1665535122293.jpg',4),(41,'Geisha de Salmón (4 unidades)','6 unidades de Geisha de Salmón con palta y queso philadelphia.',850,'producto-1665535269564.jpg',3),(42,'Geisha de Salmón ahumado (4 unidades)','Geisha de Salmón ahumado con queso philadelphia y mango.',1000,'producto-1665535335622.png',3),(43,'New York Roll (8 unidades)','Roll de Salmón, palta y pepino (8 unidades).',1400,'producto-1665535380651.jpg',5),(44,'Ebi Roll (8 unidades)','Roll de Langostino Rebozado con queso philadelphia (8 unidades).',1300,'producto-1665535438563.jpg',5),(45,'Ceviche Roll (8 unidades)','Roll de Salmon marinado en leche de tigre coronado con ceviche de Salmón (8 unidades).',1750,'producto-1665535477722.jpg',5),(46,'California Roll (8 unidades)','Roll de Kanikama y palta cubierto de Salmón (8 unidades).',1500,'producto-1665535578859.jpg',5),(47,'Philadelphia Roll (8 unidades)','Roll de Salmón, palta y queso philadelphia (8 unidades).',1450,'producto-1665535623667.jpg',5),(48,'Langostinos rebozados (6 unidades)','Langostinos rebozados en panko con salsa de Maracuya y Mostaza & Miel.',1300,'producto-1665535709332.jpg',6),(49,'Harumaki (4 unidades)','4 unidades de Harumaki de Carne y verdura con salsa agridulce.',1000,'producto-1665535748948.jpg',6),(50,'Menú Ejecutivo ','Menú ejecutivo de 2 pasos con bebida incluida.\r\n-2 Harumaki.\r\n-14 Piezas (4 Philadelphia Roll, 4 NY,',2400,'producto-1665535857588.png',8),(51,'Combo Salmón (30 piezas)','Combo Salmon: 8 Philadelphia Roll, 8 NY Roll, 6 Geisha, 4 Sashimi de Salmón, 4 Nigiri de Salmón.',4800,'producto-1665535906178.jpg',7),(52,'Combo Mixto (50 piezas)','Combo Mixto: 8 Philadelphia Roll, 8 NY Roll, 8 Ebi Roll, 8 California Roll, 4 Nigiri de Salmón, 4 Ni',8000,'producto-1665535953962.jpg',7),(53,'Combo Veggie (15 piezas)','Combo Veggie de 15 piezas.',2000,'producto-1665536004348.jpg',4),(54,'Nigiri de Salmón (4 unidades)','4 unidades de Nigiri de Salmón.',800,'producto-1665534570035.jpg',1),(56,'Nigiri de pescado blanco (4 unidades)','4 unidades de Nigiri de Lenguado coronados con Lima.',750,'producto-1665536325818.jpg',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'1'),(2,'Admin');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `image` varchar(400) NOT NULL,
  `rol_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_FK` (`rol_id`),
  CONSTRAINT `user_FK` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (22,'Admin','Admin','admin@admin.com','$2a$10$jevNeWeINBh1KNKgUxDdO.V.uxMtI7.9./vRE.LzD5/yhDwCyaCuK',1112345678,'avatar-1665697436910-796263283.jpg',2),(23,'Nicolas','Read','nico@read.com','$2a$10$/b7Kr8Sw5hEP16FZfOGPV.CTrd/drmDy2MNbjg69bX7N9WpCgaHqu',1112345678,'avatar-1665698177028-834596997.png',1),(24,'Felipe','Riva','pipe@rive.com','$2a$10$Av7Qiz7EaQJZBdkBvxkw1O3ibZEBHXgrmZa4LuCcZSRXB8ZHsBwrW',1112345678,'avatar-1665698234868-430858784.png',1),(25,'Lionel','Messi','lio@messi.com','$2a$10$8EgRd.5AiOtXFKm5gkI3NuMIazpiczDerHs6DHQ.o2HtrVcwfVn1e',1112345678,'avatar-1665698277692-523808389.jpg',1),(26,'Mateo','Retegui','mateo@retegui.com','$2a$10$PqmxmG5G.nEe407gxzk1iORHl6thIQT2knkOVvqFHwuglyDEupe2K',1112345678,'avatar-1665698408050-579817017.png',1),(27,'Nico','Profe','nico@profe.com','$2a$10$aIeW8Dd.2sSfAg2v6vcdF.gQYxZgRq8SvBh481eVBXUM7YDnYB5N2',1112345678,'avatar-1665698477227-590784872.png',1),(28,'Leo','Profe','leo@profe.com','$2a$10$wJO9WV7y.yqKAcv76DRpDeptFXy52/4DQjzxQdelo/vCeLPlOZHfm',1112345678,'avatar-1665698504651-516278568.jpg',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupo8esushidb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-13 17:05:08
