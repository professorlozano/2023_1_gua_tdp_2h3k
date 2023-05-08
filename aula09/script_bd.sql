create database dbApiCarros;

use dbApiCarros;

create table carros
(
	codigo int primary key auto_increment,
    modelo varchar(30),
    placa varchar(7)
);

insert into carros (modelo, placa) value ('Corolla','GGG1515');
insert into carros (modelo, placa) value ('Civic','ELV1590');

select * from carros;

