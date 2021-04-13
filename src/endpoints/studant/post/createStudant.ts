import { connection } from '../../../connection'
import { Request, Response } from 'express'

const createStudant = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        let classId = 0
        if(!req.body.class_id){
            classId = 1
        } else {
            classId = Number(req.body.class_id)
        }

        await connection.raw(
            `
            INSERT INTO Students (id, student_name, email, birthdate, hobbies)
            VALUES(
                "${Date.now()}",
                "${req.body.name}",
                "${req.body.email}",
                "${req.body.birthdate}",
                "${req.body.hobbies}"                 
            )`)

        res.status(201).send({message: 'Estudante criado com sucesso!'})
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export default createStudant;