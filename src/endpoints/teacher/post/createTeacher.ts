import { connection } from '../../../connection'
import { Request, Response } from 'express'
import { Especialidades } from '../../../TypesAndEnums/Enums'
import { Docentes } from '../../../TypesAndEnums/Types'

const createTeacher = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        await connection.raw(
            `
            INSERT INTO Teachers (id, teacher_name, email, birthdate, speciality)
            VALUES(
                "${Date.now()}",
                "${req.body.name}",
                "${req.body.email}",
                "${req.body.birthdate}",
                "${req.body.speciality}"                
            )`)

        res.status(201).send({message: 'Professor criado com sucesso!'})
        
    } catch (error) {
        if(error.message.includes('speciality')){
            res.status(500).send('Esta especialidade não existe, tente novamente.')
        }
        res.status(500).send(error.message)
    }
}

export default createTeacher;