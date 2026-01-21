show databases;

create user 'dev01'@'%' identified by 'dev01'; 
grant all privileges on dev.* to 'dev01'@'%' with grant option;