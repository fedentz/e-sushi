CREATE DATABASE esushi_db;

CREATE TABLE cliente (
cliente_id int PRIMARY KEY,
nombre varchar(50) NOT NULL,
apellido varchar(50) NOT NULL,
telefono varchar(50) NOT NULL,
calle varchar(250) NOT NULL,
email varchar(50) NOT NULL UNIQUE
);

CREATE TABLE producto(
producto_id int PRIMARY KEY,
cantidad int,
tipo_producto varchar(50),
precio int NOT NULL
);

CREATE TABLE pedido(
producto_id PRIMARY KEY,
nombre varchar(50) FOREIGN KEY,
apellido varchar(50) FOREIGN KEY,
telefono varchar(50) FOREIGN KEY,
calle varchar(250) FOREIGN KEY,
email varchar(50) FOREIGN KEY,
tipo_producto varchar(50) FOREIGN KEY,
precio FOREIGN KEY,
cantidad_pedida int NOT NULL
);