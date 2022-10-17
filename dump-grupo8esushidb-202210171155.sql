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
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (50,'Menú Ejecutivo ','Menú ejecutivo de 2 pasos con bebida incluida.\r\n-2 Harumaki.\r\n-14 Piezas (4 Philadelphia Roll, 4 NY,',2400,'producto-1665535857588.png',8),(53,'Combo Veggie (15 piezas)','Combo Veggie de 15 piezas.',2000,'producto-1665536004348.jpg',4),(58,'Langostinos rebozados ','Langostinos rebozados con salsa Maracuya.',1300,'producto-1665978605055.png',6),(59,'Harumaki','Harumaki de Carne y verduras con salsa agridulce (4 unidades)',1200,'producto-1665978690902.png',6),(60,'Gyozas de Cerdo','Gyozas de Cerdo con salsa de Soja',1250,'producto-1665979109496.png',6),(61,'Sashimi de Salmón','Sashimi de salmón (4 unidades)',1050,'producto-1665979254510.png',2),(62,'Sashimi de Atún Rojo','Sashimi de Atún Rojo (4 unidades)',1200,'producto-1665979290072.png',2),(63,'Sashimi de pescado blanco','Sashimi de pescado blanco (4 unidades)',950,'producto-1665979330991.png',2),(64,'Geisha de salmón','Geisha de salmón (4 unidades)',1100,'producto-1665979421358.png',3),(65,'Geisha de salmón ahumado','Geisha de salmón ahumado y mango (4 unidades)',1250,'producto-1665979482933.png',3),(66,'Geisha Tempura','Geishas de salmón tempura (4 unidades)',1150,'producto-1665979529070.png',3),(67,'Nigiri de salmón','Nigiri de Salmón (4 unidades)',900,'producto-1665979601647.png',1),(68,'Nigiri de Atún rojo','Nigiri de Atún rojo (4 unidades)',1100,'producto-1665979648937.png',1),(69,'Nigiri de Pescado Blanco ','Nigiri de Lenguado coronado con Lima (4 unidades)',800,'producto-1665979695406.png',1),(70,'California Roll','Roll de Kanikama y palta (8 unidades)',1250,'producto-1665979858208.png',5),(71,'Ebi Roll','Roll de palta, philadelphia y langostino (8 unidades)',1400,'producto-1665979918782.png',5),(72,'New York Roll','Roll de Salmón, palta y pepino (8 unidades)',1500,'producto-1665979965055.png',5),(73,'Ceviche Roll','Roll de salmon y atún marinados coronados con ceviche (8 unidades)',1800,'producto-1665980065096.png',5),(74,'Rainbow Roll','Roll de palta y philadelphia coronados con salmón, atún y lenguado (8 unidades)',1700,'producto-1665980137272.png',5),(75,'Osomaki de Salmón','Osomaki de Salmón (8 unidades)',1000,'producto-1665980284672.png',5),(76,'Combo Salmón','Combo Salmón de 30 piezas',4800,'producto-1665980423089.png',7),(77,'Combo Mixto','Combo Mixto de 50 piezas.',8000,'producto-1665980455760.png',7),(79,'Degustación de Nigiri','Degustación de Nigiri de 20 piezas',3000,'producto-1665980556344.png',7);
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

-- Dump completed on 2022-10-17 11:55:50
