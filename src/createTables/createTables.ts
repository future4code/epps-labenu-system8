import { connection } from '../connection'

const createTables = async (): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE Class (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                start_date DATE NOT NULL,
                end_date DATE NOT NULL,
                module ENUM ('1', '2', '3', '4', '5', '6', '7', '0') DEFAULT '0',
                type_class ENUM ("Integral", "Noturna")
            );
        `)

        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Teachers (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                birthdate DATE NOT NULL,
                speciality ENUM ("React", "Redux", "CSS", "Testes", "Typescript", "Programação Orientada a Objetos", "Backend"),
                class_id VARCHAR(255) NULL,
                FOREIGN KEY (class_id) REFERENCES Class(id)
            );
        `)

        await connection.raw(`
            CREATE TABLE Students (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                birthdate DATE NOT NULL,
                hobbies VARCHAR(225),
                class_id VARCHAR(255) NULL,
                FOREIGN KEY (class_id) REFERENCES Class(id)
            );
        `)
        console.log('Funfou')
        connection.destroy();
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
createTables()