SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `miruta` DEFAULT CHARACTER SET utf8;
USE `miruta`;

-- Tabla `autobus`
CREATE TABLE IF NOT EXISTS `miruta`.`autobus` (
  `idAutobus` INT NOT NULL AUTO_INCREMENT,
  `placa` VARCHAR(45) NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `capacidad` VARCHAR(45) NOT NULL,
  `estado` ENUM('activo', 'inactivo', 'en_mantenimiento', 'retirado') NOT NULL,
  PRIMARY KEY (`idAutobus`)
) ENGINE = InnoDB;

-- Tabla `rutas`
CREATE TABLE IF NOT EXISTS `miruta`.`rutas` (
  `idrutas` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(100) NULL,
  `origen` VARCHAR(45) NOT NULL,
  `destino` VARCHAR(45) NOT NULL,
  `horaInicio` TIME NOT NULL,
  `horaFin` TIME NOT NULL,
  PRIMARY KEY (`idrutas`)
) ENGINE = InnoDB;

-- Tabla `conductores`
CREATE TABLE IF NOT EXISTS `miruta`.`conductores` (
  `idconductores` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido1` VARCHAR(45) NOT NULL,
  `apellido2` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `licencia` VARCHAR(45) NOT NULL,
  `fecha_contratacion` DATE NOT NULL,
  PRIMARY KEY (`idconductores`)
) ENGINE = InnoDB;

-- Tabla `conductosAutobus`
CREATE TABLE IF NOT EXISTS `miruta`.`conductosAutobus` (
  `idconductosAutobus` INT NOT NULL AUTO_INCREMENT,
  `conductorId` INT NOT NULL,
  `autobusId` INT NOT NULL,
  `fechaAsignacion` DATE NOT NULL,
  `fechaFin` DATE NOT NULL,
  PRIMARY KEY (`idconductosAutobus`),
  INDEX `autobusId_idx` (`autobusId`),
  INDEX `conductoirId_idx` (`conductorId`),
  CONSTRAINT `fk_conductoirId`
    FOREIGN KEY (`conductorId`)
    REFERENCES `autobusesguia`.`conductores` (`idconductores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_autobusId`
    FOREIGN KEY (`autobusId`)
    REFERENCES `miruta`.`autobus` (`idAutobus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabla `ubicacion`
CREATE TABLE IF NOT EXISTS `miruta`.`ubicacion` (
  `idubicacion` INT NOT NULL AUTO_INCREMENT,
  `autobusId` INT NOT NULL,
  `latitud` DECIMAL(10,8) NOT NULL,
  `longitud` DECIMAL(11,8) NOT NULL,
  `timeStamp` DATETIME NOT NULL,
  PRIMARY KEY (`idubicacion`),
  INDEX `fk_ubicacion_autobus1_idx` (`autobusId`),
  CONSTRAINT `fk_ubicacion_autobus1`
    FOREIGN KEY (`autobusId`)
    REFERENCES `miruta`.`autobus` (`idAutobus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabla `usuarios`
CREATE TABLE IF NOT EXISTS `miruta`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido1` VARCHAR(45) NOT NULL,
  `apellido2` VARCHAR(45) NULL,
  `nombreusuario` VARCHAR(45) NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idusuarios`)
) ENGINE = InnoDB;

-- Tabla `autobusRuta`
CREATE TABLE IF NOT EXISTS `miruta`.`autobusRuta` (
  `idautobusRuta` INT NOT NULL AUTO_INCREMENT,
  `autobusId` INT NOT NULL,
  `rutaId` INT NOT NULL,
  `fechaInicio` DATE NOT NULL,
  `fechaFin` DATE NOT NULL,
  PRIMARY KEY (`idautobusRuta`),
  INDEX `fk_autobusRuta_autobus1_idx` (`autobusId`),
  INDEX `fk_autobusRuta_rutas1_idx` (`rutaId`),
  CONSTRAINT `fk_autobusRuta_autobus1`
    FOREIGN KEY (`autobusId`)
    REFERENCES `miruta`.`autobus` (`idAutobus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_autobusRuta_rutas1`
    FOREIGN KEY (`rutaId`)
    REFERENCES `miruta`.`rutas` (`idrutas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabla `paradas`
CREATE TABLE IF NOT EXISTS `miruta`.`paradas` (
  `idparadas` INT NOT NULL AUTO_INCREMENT,
  `rutaId` INT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `latitud` DECIMAL(10,8) NOT NULL,
  `longitud` DECIMAL(11,8) NOT NULL,
  `orden` INT NOT NULL,
  PRIMARY KEY (`idparadas`),
  INDEX `fk_paradas_rutas1_idx` (`rutaId`),
  CONSTRAINT `fk_paradas_rutas1`
    FOREIGN KEY (`rutaId`)
    REFERENCES `miruta`.`rutas` (`idrutas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabla `usuarioRutaFavorita`
CREATE TABLE IF NOT EXISTS `miruta`.`usuarioRutaFavorita` (
  `idusuarioRutaFavorita` INT NOT NULL AUTO_INCREMENT,
  `usuarioId` INT NOT NULL,
  `rutaId` INT NOT NULL,
  PRIMARY KEY (`idusuarioRutaFavorita`),
  INDEX `fk_usuarioRutaFavorita_usuarios1_idx` (`usuarioId`),
  INDEX `fk_usuarioRutaFavorita_rutas1_idx` (`rutaId`),
  CONSTRAINT `fk_usuarioRutaFavorita_usuarios1`
    FOREIGN KEY (`usuarioId`)
    REFERENCES `miruta`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarioRutaFavorita_rutas1`
    FOREIGN KEY (`rutaId`)
    REFERENCES `miruta`.`rutas` (`idrutas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabla `reportes`
CREATE TABLE IF NOT EXISTS `miruta`.`reportes` (
  `idreportes` INT NOT NULL AUTO_INCREMENT,
  `usuarioId` INT NOT NULL,
  `autobusId` INT NOT NULL,
  `rutaId` INT NOT NULL,
  `mensaje` TEXT NOT NULL,
  `fechaReporte` TIMESTAMP NOT NULL,
  PRIMARY KEY (`idreportes`),
  INDEX `fk_reportes_usuarios1_idx` (`usuarioId`),
  INDEX `fk_reportes_rutas1_idx` (`rutaId`),
  INDEX `fk_reportes_autobus1_idx` (`autobusId`),
  CONSTRAINT `fk_reportes_usuarios1`
    FOREIGN KEY (`usuarioId`)
    REFERENCES `miruta`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reportes_autobus1`
    FOREIGN KEY (`autobusId`)
    REFERENCES `miruta`.`autobus` (`idAutobus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reportes_rutas1`
    FOREIGN KEY (`rutaId`)
    REFERENCES `miruta`.`rutas` (`idrutas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
