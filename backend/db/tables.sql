use northino;

create table if not exists request_service_mentor(
id int not null primary key auto_increment,
fullname varchar(255) not null,
email varchar(255) not null,
phone_number varchar(255) not null,
mentorship_type varchar(255) not null,
experience varchar(255) not null

);

create table if not exists request_service_promotion(
id int not null primary key auto_increment,
fullname varchar(255) not null,
email varchar(255) not null,
phone_number varchar(255) not null,
business_name varchar(255) not null,
business_type varchar(255) not null,
business_description text not null
);

create table if not exists request_service_development(
id int not null primary key auto_increment,
fullname varchar(255) not null,
email varchar(255) not null,
phone_number varchar(255) not null,
business_name varchar(255) not null,
business_type varchar(255) not null,
business_description text not null
);

create table if not exists client_projects(
id int not null primary key auto_increment,
client_name varchar(255) not null,
project_name varchar(255) not null,
project_description text not null
);
create table if not exists built_projects(
id int not null primary key auto_increment,
project_name varchar(255) not null,
project_description text not null,
team varchar(255) not null
);

create table if not exists mentors(
id int not null primary key auto_increment,
mentor_name varchar(255) not null,
mentor_field varchar(255) not null,
mentor_experience varchar(255)
);



