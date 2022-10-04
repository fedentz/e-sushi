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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (13,'Nigiri de Salmón (4 unidades)','4 unidades de Nigiri de Salmón.',800,'Nigiri Salmon1.jpg',300,2),(16,'Nigiri de Pescado Blanco (4 unidades)','4 unidades de Nigiris de Lenguado coronados con Lima.',750,'Nigiri de Lenguado.jpg',300,2),(17,'Sashimi de Salmón (4 unidades)','4 unidades de Sashimi de Salmón.',1000,'Sashimi de SalmÃ³n.jpg',300,2),(18,'Sashimi de Atún Rojo (4 unidades)','4 unidades de Sashimi de atún rojo.',1200,'Sashimi de Atun Rojo.jpg',300,2),(19,'Nigiri Veggie (4 unidades)','4 unidades de Nigiri de Palta ',500,'Nigiri Veggie.jpg',300,2),(20,'Geisha de Salmón (4 unidades)','6 unidades de Geisha de Salmón con palta y queso philadelphia.',850,'geisha.jpg',300,2),(21,'Geisha de Salmón ahumado (4 unidades)','Geisha de Salmón ahumado con queso philadelphia y mango.',1000,'Geisha de salmon ahumado.png',300,2),(22,'New York Roll (8 unidades)','Roll de Salmón, palta y pepino (8 unidades).',1400,'Ny Roll.jpg',300,2),(23,'Ebi Roll (8 unidades)','Roll de Langostino Rebozado con queso philadelphia (8 unidades).',1300,'Ebi Roll.jpg',300,2),(24,'Ceviche Roll (8 unidades)','Roll de Salmon marinado en leche de tigre coronado con ceviche de Salmón (8 unidades).',1750,'Ceviche Roll.jpg',300,1),(25,'California Roll (8 unidades)','Roll de Kanikama y palta cubierto de Salmón (8 unidades).',1500,'Calofornia Roll.jpg',300,2),(26,'Philadelphia Roll (8 unidades)','Roll de Salmón, palta y queso philadelphia (8 unidades).',1450,'Phila Roll.jpg',300,2),(27,'Langostinos rebozados (6 unidades)','Langostinos rebozados en panko con salsa de Maracuya y Mostaza & Miel.',1300,'Langostinos.jpg',300,2),(28,'Harumaki (4 unidades)','4 unidades de Harumaki de Carne y verdura con salsa agridulce.',1000,'Harumaki.jpg',300,2),(29,'Menú Ejecutivo ','Menú ejecutivo de 2 pasos con bebida incluida.\r\n-2 Harumaki.\r\n-12 Piezas (4 Philadelphia Roll, 4 NY ',2200,'Menu ejecutivo E-Sushi.png',300,1),(30,'Combo Salmón (30 piezas)','Combo Salmon: 8 Philadelphia Roll, 8 NY Roll, 6 Geisha, 4 Sashimi de Salmón, 4 Nigiri de Salmón.',4800,'Combo Salmon.jpg',300,2),(31,'Combo Mixto (50 piezas)','Combo Mixto: 8 Philadelphia Roll, 8 NY Roll, 8 Ebi Roll, 8 California Roll, 4 Nigiri de Salmón, 4 Ni',8000,'Combo Mix.jpg',300,2),(32,'Combo Veggie (15 piezas)','Combo Veggie de 15 piezas.',2000,'Tabla veggie.jpg',300,2);
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
INSERT INTO `rol` VALUES (1,'usuario'),(2,'admin');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'admin','admin','admin@admin.com','$2a$10$v2DIaxm845iOJNGgMGKm6eJapwNpSiKuq0L6C9vmoToZW.GPw71YW',2147483647,'FOTOSUSHI13.jpg',2),(3,'Federico','Nintzel','federico@nintzel.com','$2a$10$EpeQELpjZ1plcLAd5xcjb.9rX9g3wegteJ19qLhseITzmQTKU6b2e',1151229506,'FOTOSUSHI13.jpg',1);
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

-- Dump completed on 2022-10-04 11:32:38
