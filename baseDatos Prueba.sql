create database prueba;

use prueba;

CREATE TABLE usuarios (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  usuario VARCHAR(50) NOT NULL,
  contraseña VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_usuario)
);

INSERT INTO usuarios (id_usuario, usuario, contraseña)
VALUES
(1, 'mario', '1234'),
(2, 'kratos', '1234'),
(3, 'david', '1234');




select * from usuarios WHERE usuario='david' AND contraseña='1234';