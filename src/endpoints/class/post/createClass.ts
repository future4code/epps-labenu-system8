import { connection } from '../../../connection'
import { Request, Response } from 'express'


const createClass = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        let nameClass = req.body.name
        if (req.body.type_class === 'Noturna') {
            if (!req.body.name.includes('-na-night')) {
                throw new Error('Nomes de turmas noturnas precisam terminar com -na-nigth.')
            } else {
                nameClass = req.body.name
            }
        }

        await connection.raw(
            `INSERT INTO Class (id, name, start_date, end_date, type_class)
            VALUES(
                "${Date.now()}",
                "${nameClass}",
                "${req.body.start_date}",
                "${req.body.end_date}",
                "${req.body.type_class}"
            )`
        )

        res.status(201).send('Turma criada com sucesso!')


    } catch (error) {
        if (error.message.includes('type_class')) {
            res.status(422).send('Este tipo de turma não existe.')
        }
        res.status(500).send(error.message)
    }
}

export default createClass;