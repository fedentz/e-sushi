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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'En oferta'),(2,'Ultimos agregados');
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
  `stock` int(11) NOT NULL,
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
INSERT INTO `product` VALUES (38,'Sashimi de Salmón (4 unidades)','4 unidades de Sashimi de Salmón.',1000,'producto-1665534829268.jpg',0,2),(39,'Sashimi de Atún Rojo (4 unidades)','4 unidades de Sashimi de atún rojo.',1200,'producto-1665534948699.jpg',0,2),(40,'Nigiri Veggie (4 unidades)','4 unidades de Nigiri de Palta',500,'producto-1665535122293.jpg',0,1),(41,'Geisha de Salmón (4 unidades)','6 unidades de Geisha de Salmón con palta y queso philadelphia.',850,'producto-1665535269564.jpg',0,2),(42,'Geisha de Salmón ahumado (4 unidades)','Geisha de Salmón ahumado con queso philadelphia y mango.',1000,'producto-1665535335622.png',0,2),(43,'New York Roll (8 unidades)','Roll de Salmón, palta y pepino (8 unidades).',1400,'producto-1665535380651.jpg',0,1),(44,'Ebi Roll (8 unidades)','Roll de Langostino Rebozado con queso philadelphia (8 unidades).',1300,'producto-1665535438563.jpg',0,1),(45,'Ceviche Roll (8 unidades)','Roll de Salmon marinado en leche de tigre coronado con ceviche de Salmón (8 unidades).',1750,'producto-1665535477722.jpg',0,2),(46,'California Roll (8 unidades)','Roll de Kanikama y palta cubierto de Salmón (8 unidades).',1500,'producto-1665535578859.jpg',0,1),(47,'Philadelphia Roll (8 unidades)','Roll de Salmón, palta y queso philadelphia (8 unidades).',1450,'producto-1665535623667.jpg',0,2),(48,'Langostinos rebozados (6 unidades)','Langostinos rebozados en panko con salsa de Maracuya y Mostaza & Miel.',1300,'producto-1665535709332.jpg',0,2),(49,'Harumaki (4 unidades)','4 unidades de Harumaki de Carne y verdura con salsa agridulce.',1000,'producto-1665535748948.jpg',0,2),(50,'Menú Ejecutivo ','Menú ejecutivo de 2 pasos con bebida incluida.\r\n-2 Harumaki.\r\n-14 Piezas (4 Philadelphia Roll, 4 NY,',2400,'producto-1665535857588.png',0,1),(51,'Combo Salmón (30 piezas)','Combo Salmon: 8 Philadelphia Roll, 8 NY Roll, 6 Geisha, 4 Sashimi de Salmón, 4 Nigiri de Salmón.',4800,'producto-1665535906178.jpg',0,2),(52,'Combo Mixto (50 piezas)','Combo Mixto: 8 Philadelphia Roll, 8 NY Roll, 8 Ebi Roll, 8 California Roll, 4 Nigiri de Salmón, 4 Ni',8000,'producto-1665535953962.jpg',0,2),(53,'Combo Veggie (15 piezas)','Combo Veggie de 15 piezas.',2000,'producto-1665536004348.jpg',0,1),(54,'Nigiri de Salmón (4 unidades)','4 unidades de Nigiri de Salmón.',800,'producto-1665534570035.jpg',0,2),(56,'Nigiri de pescado blanco (4 unidades)','4 unidades de Nigiri de Lenguado coronados con Lima.',750,'producto-1665536325818.jpg',0,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'1');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (18,'Asdasd','Read','tom@gamil.com','$2a$10$ENNqmVwsU54iGcP5el3NpuzIowl518y4kh7X5C7vJKiIj41xoC6r.',2147483647,'Nigiri Veggie.jpg',1),(19,'Nicolás','Read','tom@gmail.com','$2a$10$9UdZ6q6YE2b/6hzAD.tdL.NN0BvhfUEJk9mtxCil0eaOnJXFFN4TO',1160056227,'Golden Roll.jpg',1),(20,'Nicolás','Read','nicolasreaddossi@hotmail.com','$2a$10$/0Uat8bS.OgCwlpf6VXA6OLC1gUQgPgr.EjDhI2Gy5k9yEnToTFgi',1160056227,'Nigiri Ebi.jpg',1);
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

-- Dump completed on 2022-10-13 16:13:00
