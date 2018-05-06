user:
INSERT INTO user (id, email, password, role, name) VALUES (NULL,"profesor1@usach.cl", "passP1", "2", "profesor1");
INSERT INTO user (id, email, password, role, name) VALUES (NULL,"profesor2@usach.cl", "passP2", "2", "profesor2");
INSERT INTO user (id, email, password, role, name) VALUES (NULL,"alumno3@usach.cl", "passA3", "2", "alumno3");

problem:
INSERT INTO problem (id,description, id_user) VALUES (NULL,"Este es un problema creado por: profesor1", "1");
INSERT INTO problem (id,description, id_user) VALUES (NULL,"Este es un problema creado por: profesor2", "2");


solution:
INSERT INTO solution (id,description, id_user,id_problem) VALUES (NULL,"Este es una solucion creada para solucionar el problema 1 By: alumno3", "3","1");


testcases:
INSERT INTO testCases (id,id_problem,input,output) VALUES (NULL,"1","input para problema1","output para problema1");
INSERT INTO testCases (id,id_problem,input,output) VALUES (NULL,"1","input para problema1","output para problema1");


