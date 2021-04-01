import { connection } from '../../../connection'
import { Request, Response } from 'express'


const createClass = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        await connection.raw(
            `INSERT INTO Turmas (nome, data_inicio, data_final, modulo)
            VALUES(
                "${req.body.nome}",
                "${req.body.data_inicio}",
                "${req.body.data_final}",
                "${req.body.modulo}"
            )`                  
        )

        res.status(201).send('Turma criada com sucesso!')
        
    } catch (error) {
        res.status(500).send("Todos os campos devem ser preenchidos")
    }
}

export default createClass;