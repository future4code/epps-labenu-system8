import {connection } from '../connection'

const createTables = async () =>{
    try {
        await connection.raw(`
            CREATE TABLE Class (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(50) NOT NULL,
                start_date DATE NOT NULL,
                end_date DATE NOT NULL,
                module ENUM ('1', '2', '3', '4', '5', '6', '7,', '0') DEFAULT '0',
                type_class ENUM ("Integral", "Noturna")
            );
        `)

        await connection.raw(`
            CREATE TABLE Studants (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                birthdate DATE NOT NULL,
                hobbies VARCHAR(225),
                class_id INT NULL DEFAULT '0',
                FOREIGN KEY (class_id) REFERENCES Class(id)
            );
        `)

        await connection.raw(`
            CREATE TABLE Teachers (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                birthdate DATE NOT NULL,
                speciality ENUM ("React", "Redux", "CSS", "Testes", "Typescript", "Programação Orientada a Objetos", "Backend"),
                class_id INT NULL DEFAULT '0',
                FOREIGN KEY (class_id) REFERENCES Class(id)
            );
        `)
    } catch (error) {
       console.log(error)
    }
}
createTables()