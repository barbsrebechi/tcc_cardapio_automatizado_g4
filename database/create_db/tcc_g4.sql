CREATE TABLE `ITENS` (
	`itn_id` INT NOT NULL,
	`itn_nome_item` varchar(64) NOT NULL,
	`itn_descricao` varchar(256) NOT NULL,
	`itn_imagem` varchar(512) NOT NULL,
	PRIMARY KEY (`itn_id`)
);

CREATE TABLE `PEDIDOS` (
	`ped_id` INT NOT NULL AUTO_INCREMENT,
	`usu_id` INT NOT NULL,
	`ped_dt_hr_pedido` DATETIME NOT NULL,
	`ped_status` tinyint NOT NULL,
	`ped_observacoes` varchar(128),
	PRIMARY KEY (`ped_id`)
);

CREATE TABLE `PEDIDO_ITENS` (
	`pdit_id` INT NOT NULL,
	`ped_id` INT NOT NULL,
	`itn_id` INT NOT NULL,
	`pdit_qtd` INT NOT NULL,
	`pdit_vlr_unit` DECIMAL(6,2) NOT NULL,
	PRIMARY KEY (`pdit_id`)
);

CREATE TABLE `USUARIOS_SISTEMA` (
	`us_id` INT NOT NULL AUTO_INCREMENT,
	`us_tipo` INT NOT NULL,
	`us_nome` varchar(32) NOT NULL,
	`us_login` varchar(16) NOT NULL,
	`us_senha` varchar(128) NOT NULL,
	PRIMARY KEY (`us_id`)
);

CREATE TABLE `USUARIOS` (
	`usu_id` INT NOT NULL AUTO_INCREMENT,
	`usu_nome` varchar(32) NOT NULL,
	`usu_cpf` char(14) NOT NULL,
	`usu_cod_cartao` varchar(10),
	`usu_dt_cadastro` DATE NOT NULL,
	`usu_dt_cartao` DATE NOT NULL,
	`usu_vip` bit NOT NULL,
	PRIMARY KEY (`usu_id`)
);

CREATE TABLE `PONTOS_VENDA` (
	`pvd_id` INT NOT NULL AUTO_INCREMENT,
	`pvd_nome` varchar(32) NOT NULL,
	`pvd_descricao` varchar(128),
	`pvd_foto` varchar(512) NOT NULL,
	PRIMARY KEY (`pvd_id`)
);

CREATE TABLE `PONTO_VENDA_ITENS` (
	`pvd_id` INT NOT NULL,
	`itn_id` INT NOT NULL,
	`pvd_preco_item` DECIMAL(6,2) NOT NULL,
	PRIMARY KEY (`pvd_id`,`itn_id`)
);

CREATE TABLE `RECARGAS` (
	`rec_id` INT NOT NULL AUTO_INCREMENT,
	`usu_id` INT NOT NULL,
	`rec_descricao` tinyint NOT NULL,
	`rec_valor` DECIMAL(6,2) NOT NULL,
	`rec_data` DATETIME NOT NULL,
	`ped_id` INT,
	PRIMARY KEY (`rec_id`)
);

ALTER TABLE `PEDIDOS` ADD CONSTRAINT `PEDIDOS_fk0` FOREIGN KEY (`usu_id`) REFERENCES `USUARIOS`(`usu_id`);

ALTER TABLE `PEDIDO_ITENS` ADD CONSTRAINT `PEDIDO_ITENS_fk0` FOREIGN KEY (`ped_id`) REFERENCES `PEDIDOS`(`ped_id`);

ALTER TABLE `PEDIDO_ITENS` ADD CONSTRAINT `PEDIDO_ITENS_fk1` FOREIGN KEY (`itn_id`) REFERENCES `ITENS`(`itn_id`);

ALTER TABLE `PONTO_VENDA_ITENS` ADD CONSTRAINT `PONTO_VENDA_ITENS_fk0` FOREIGN KEY (`pvd_id`) REFERENCES `PONTOS_VENDA`(`pvd_id`);

ALTER TABLE `PONTO_VENDA_ITENS` ADD CONSTRAINT `PONTO_VENDA_ITENS_fk1` FOREIGN KEY (`itn_id`) REFERENCES `ITENS`(`itn_id`);

ALTER TABLE `RECARGAS` ADD CONSTRAINT `RECARGAS_fk0` FOREIGN KEY (`usu_id`) REFERENCES `USUARIOS`(`usu_id`);

ALTER TABLE `RECARGAS` ADD CONSTRAINT `RECARGAS_fk1` FOREIGN KEY (`ped_id`) REFERENCES `PEDIDOS`(`ped_id`);









