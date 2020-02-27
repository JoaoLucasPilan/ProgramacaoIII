CREATE DATABASE petshop;
USE petshop;

CREATE TABLE users(
	id INT PRIMARY KEY auto_increment,
    username VARCHAR(60),
    birthday date
);

insert into users(username, birthday)
values
('Zezin', '1960-01-25'),
('Coroninha', '2020-02-25'),
('Joao', '2000-08-25');

select * from users;