id INT NOT NULL AUTO_INCREMENT,
);
create database mingesoFCYP;

CREATE TABLE user ( 
id INT NOT NULL AUTO_INCREMENT, 
email VARCHAR(30) NOT NULL UNIQUE, 
password VARCHAR(30) NOT NULL, 
role INT NOT NULL, 
name VARCHAR(50),
PRIMARY KEY (id)
);



CREATE TABLE problem ( 
id INT NOT NULL AUTO_INCREMENT ,
description VARCHAR(1000) NOT NULL, 
id_user INT NOT NULL, 
PRIMARY KEY (id),
FOREIGN KEY (id_user) REFERENCES user(id)
);


CREATE TABLE solution ( 
id INT NOT NULL AUTO_INCREMENT,
description VARCHAR(1000) NOT NULL, 
id_user INT NOT NULL, 
id_problem INT NOT NULL, 
PRIMARY KEY (id),
FOREIGN KEY (id_user) REFERENCES user(id),
FOREIGN KEY (id_problem) REFERENCES problem(id)
);


CREATE TABLE testCases ( 
id INT NOT NULL AUTO_INCREMENT,
id_problem INT NOT NULL, 
input VARCHAR(30) NOT NULL,
output VARCHAR(30) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (id_problem) REFERENCES problem(id)
);

/*
CREATE TABLE test ( 
id INT NOT NULL AUTO_INCREMENT 
id_problem INT NOT NULL,
id_solution INT NOT NULL, 
input VARCHAR(30) NOT NULL,
output VARCHAR(30) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (id_problem) REFERENCES problem(id),
FOREIGN KEY (id_solution) REFERENCES solution(id)
);
*/


