-- SELECT
SELECT us_id, us_tipo, us_nome, us_login, us_senha FROM USUARIOS_SISTEMA; 

SELECT rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id FROM RECARGAS;

SELECT pdit_id, ped_id, itn_id pdit_qtd, pdit_vlr_unit FROM PEDIDO_ITENS; 

SELECT ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_obsercacoes FROM PEDIDOS;

SELECT usu_id, usu_nome, usu_cpf, usu_cod_cartao FROM USUARIOS;

SELECT pvd_id, itn_id FROM PONTO_VENDA_ITENS ;

-- SELECT prt_id, prt_rodada, prt_data, prt_hora, tme_id_mandante, tme_id_visitante, est_id FROM partidas;
SELECT pvd_id, pvd_nome, pvd_descricao, pvd_foto FROM  PONTOS_VENDA;

SELECT itn_id, itn_nome_item, itn_descricao, itn_imagem, itn_preco  FROM ITENS;


-- soma valor pedidos
select SUM(pdit_qtd * pdit_vlr_unit) as Total from pedido_itens where ped_id = 9;

-- lançamentos por usuário
SELECT usu_id, rec_valor FROM recargas WHERE usu_id = 4;

-- saldo do usuário
SELECT SUM(rec_valor) AS saldo FROM recargas WHERE usu_id = 4;





-- DROP
DROP TABLE USUARIOS_SISTEMA;
DROP TABLE RECARGAS; 
DROP TABLE PEDIDO_ITENS;
DROP TABLE PEDIDOS; 
DROP TABLE USUARIOS;
DROP TABLE PONTO_VENDA_ITENS;
DROP TABLE PONTOS_VENDA;
DROP TABLE ITENS;

-- DESCRIBE
DESCRIBE USUARIOS_SISTEMA;
DESCRIBE RECARGAS;
DESCRIBE PEDIDO_ITENS;
DESCRIBE PEDIDOS; 
DESCRIBE USUARIOS;
DESCRIBE PONTOS_VENDA_ITENS;
DESCRIBE PONTO_VENDA;
DESCRIBE ITENS;

-- APAGAR REGISTROS
DELETE FROM USUARIOS_SISTEMA;
DELETE FROM RECARGAS;
DELETE FROM PEDIDO_ITENS;
DELETE FROM PEDIDOS;
DELETE FROM USUARIOS;
DELETE FROM PONTOS_VENDA_ITENS;
DELETE FROM PONTO_VENDA;
DELETE FROM ITENS;

-- RESETAR AUTO INCREMENTO (somente para tabelas criadas com Auto-incremento)
ALTER TABLE USUARIOS_SISTEMA AUTO_INCREMENT = 1;


