create database if not exists Trybeer;
use Trybeer;

create table products (
id int primary key auto_increment,
product varchar(100) not null,
price double not null,
volume int not null
) engine=InnoDB;

create table users (
id int primary key auto_increment,
name varchar(100) not null,
email varchar(100) not null,
password  varchar(100) not null,
role varchar(100) not null
) engine=InnoDB;


insert into products (product, price, volume) value
('Skol Lata', 2.20, 250),
('Heineken', 7.50, 600),
('Antarctica Pilsen',2.49, 300),
('Brahma', 7.50, 600),
('Skol', 2.19, 219),
('Skol Beats Senses', 4.49, 313),
('Becks', 4.99, 330),
('Brahma Duplo Malte', 2.79, 350),
('Becks', 8.89, 600),
('Skol Beats Senses', 3.57, 269),
('Stella Artoi s', 3.49, 275);

insert into users (name, email, password, role) value
('tryber', 'tryber@gamil.com', '123456', 'admin'),
('Taylor Swift', 'taylorswift@email.com', 'senha', 'client');

