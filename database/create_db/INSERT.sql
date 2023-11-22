

use bd_tcc_etim_121_g4;

-- USUARIOS_SISTEMA "4"
INSERT INTO USUARIOS_SISTEMA (us_id, us_tipo, us_nome, us_login, us_senha) VALUES (1, 0, 'Sebastião Luís Cauê Martins', 'sebastiao1', '123456');
INSERT INTO USUARIOS_SISTEMA (us_id, us_tipo, us_nome, us_login, us_senha) VALUES (2, 1, 'Carla Gabriela Yasmim Batista', 'carla6', '123456');
INSERT INTO USUARIOS_SISTEMA (us_id, us_tipo, us_nome, us_login, us_senha) VALUES (3, 2, 'Guilherme Luis Vitor Peixoto', 'guilherme2', '123456');
INSERT INTO USUARIOS_SISTEMA (us_id, us_tipo, us_nome, us_login, us_senha) VALUES (4, 2, 'Luciana Gabrielly Da Paz', 'luciana3', '123456');

-- USUARIOS "6"
INSERT INTO USUARIOS ( usu_id, usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip) VALUES ( 1,'Roberto Kaique da Mota', '686.698.844-61', '7654290876', '2023-01-10','2023-04-10', true);
INSERT INTO USUARIOS ( usu_id, usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip) VALUES ( 2,'Gabriela Elisa Milena Figueiredo', '784.035.998-11', '8743098216', '2022-10-12','2023-01-12', true);
INSERT INTO USUARIOS ( usu_id, usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip) VALUES ( 3,'Isabella Antonella da Paz', '728.387.428-33', '9634211198', '2023-02-28','2023-05-28', true);
INSERT INTO USUARIOS ( usu_id, usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip) VALUES ( 4,'Leandro Jorge Dias', '502.007.618-03', '76555245', '2023-03-19','2023-06-19', false);
INSERT INTO USUARIOS ( usu_id, usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip) VALUES ( 5,'Tatiane Lúcia Isabela Ribeiro', '672.950.128-69', '24367894', '2023-04-01','2023-07-01', false);
INSERT INTO USUARIOS ( usu_id, usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip) VALUES ( 6,'Ruan Diego Augusto Galvão', '485.425.238-30', '87654322', '2023-05-22','2023-08-22', false);

-- PONTOS_VENDA "4"
INSERT INTO PONTOS_VENDA (pvd_id, pvd_nome, pvd_descricao, pvd_foto ) VALUES ( 1, 'Preço Geral', 'Salgados e Porções', 'pgeral.png');
INSERT INTO PONTOS_VENDA (pvd_id, pvd_nome, pvd_descricao, pvd_foto ) VALUES ( 2, 'Espetos de Ouro', 'Espetinhos de Ouro', 'espeto.png');
INSERT INTO PONTOS_VENDA (pvd_id, pvd_nome, pvd_descricao, pvd_foto ) VALUES ( 3, 'Tayro', 'Sorveteria', 'sorveteria.png');
INSERT INTO PONTOS_VENDA (pvd_id, pvd_nome, pvd_descricao, pvd_foto ) VALUES ( 4, 'Preço Geral - Bar molhado', 'Bebidas Alcoólicas e não Alcoólicas', 'molhado.png');



-- ITENS "12"
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 1, 'Isca de Frango', 'Porcão','ifrango.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 2, 'Hot-Dog', 'Lanche','hotdog.png');
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 3, 'Batata Frita', 'Porcão','fritas.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 4, 'Espetinho de Carne', 'Espeto','espcarne.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 5, 'Pão de Alho', 'Unidade','paoalho.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 6, 'Espetinho de Frango', 'Espeto','espfrango.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 7, 'Casquinha', 'Sorvete','casquina.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 8, 'Sunday', 'Sorvete','sunday.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 9, 'Milk Shake', 'Grande-440ML','milkeshake.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 10, 'Caipirinha Vodka', 'Bebida Alcoólica','caipirinha.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 11, 'Brahma', 'Lata-350ML','brahama.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 12, 'Coca-cola', 'Lata-350Ml','cocacola.png'); 
INSERT INTO ITENS ( itn_id, itn_nome_item, itn_descricao, itn_imagem ) VALUES ( 13, 'Enrolado', 'Presunto e queijo','enrolado.png'); 

 


-- PONTO_VENDA_ITENS  "TENS DISPONÍVEIS NOS PONTOS DE VENDA"
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (1, 1, 1, 30.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (2, 1, 2, 14.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (3, 1, 3, 25.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (4, 2, 4, 12.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (5, 2, 5, 8.50);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (6, 2, 6, 11.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (7, 3, 7, 8.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (8, 3, 8, 12.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (9, 3, 9, 20.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (10, 4, 10, 22.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (11, 4, 11, 8.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (12, 4, 12, 7.00);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (13, 1, 12, 9.80);
INSERT INTO PONTO_VENDA_ITENS (pvi_id, pvd_id, itn_id, pvd_preco_item) VALUES (14, 2, 12, 10.80);


-- RECARGA "ADCIONAR MAIS NA CORREÇÃO" "5"
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (1, 1, 0, 90.00, '2023-08-05', null);
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (2, 2, 0, 50.00, '2023-08-05', null);
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (3, 3, 0, 100.00, '2023-08-05', null);
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (4, 4, 0, 200.00, '2023-08-06', null);
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (5, 5, 0, 30.00, '2023-08-06', null);
-- calção
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (6, 4, 4, -10.00, '2023-08-06', null);
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (7, 5, 4, -10.00, '2023-08-06', null);


-- PEDIDOS "10 ENTRE 4 USUÁRIOS COM RECARGA"
INSERT INTO PEDIDOS ( ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (1, 2, '2023-08-05 11:00', 4, 'bem quente');
INSERT INTO PEDIDOS ( ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (2, 1, '2023-08-05 13:00', 4, null);
INSERT INTO PEDIDOS ( ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (3, 1, '2023-08-05 12:30', 4, 'com muito gelo');
INSERT INTO PEDIDOS ( ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (4, 1, '2023-08-05 11:40', 4, null);
INSERT INTO PEDIDOS ( ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (5, 2, '2023-08-05 14:40', 4, null);
INSERT INTO PEDIDOS ( ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (6, 5, '2023-08-06 10:37', 1, null);
INSERT INTO PEDIDOS ( ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (7, 4, '2023-08-06 10:30', 3, null);
INSERT INTO PEDIDOS ( ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (8, 4, '2023-08-06 12:11', 2, null);
INSERT INTO PEDIDOS ( ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (9, 4, '2023-08-06 12:42', 1, null);

-- PEDIDO_ITENS "16"
 
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (1, 1, 2, 2, 25.00 );
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (2, 2, 11, 1, 8.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (3, 3, 12, 1, 7.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (4, 4, 11, 1, 8.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (5, 4, 12, 1, 7.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (6, 5, 7, 2, 8.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (7, 5, 8, 2, 12.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (8, 5, 9, 3, 20.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (9, 6, 4, 1, 12.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (10, 6, 7, 1, 8.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (11, 7, 7, 2, 8.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (12, 7, 8, 1, 12.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (13, 7, 2, 2, 14.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (14, 8, 5, 2, 8.50 );
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (15, 8, 10, 1, 22.00);
INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (16, 9, 3, 1, 25.00 );

-- RECARGAS
-- compras
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (8, 2, 1, -50.00, '2023-08-05', 1); 
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (9, 1, 1, -8.00, '2023-08-05', 2); 
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (10, 1, 1, -7.00, '2023-08-05', 3); 
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (11, 1, 1, -15.00, '2023-08-05', 4); 
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (12, 2, 1, -100.00, '2023-08-05', 5); 
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (13, 5, 1, -20.00, '2023-08-06', 6); 
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (14, 4, 1, -56.00, '2023-08-06', 7); 
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (15, 4, 1, -39.00, '2023-08-06', 8); 
INSERT INTO RECARGAS ( rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (16, 4, 1, -25.00, '2023-08-06', 9); 



