import { connection } from '../../connection'
import { Request, Response } from 'express'

const createStudant = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        await connection.raw(
            `
            INSERT INTO Estudantes (nome, email, data_nasc, turma_id)
            VALUES(
                "${req.body.nome}",
                "${req.body.email}",
                "${req.body.data_nasc}",
                "${req.body.turma_id}"                
            )`)
            
            await connection.raw(
                `
                INSERT INTO Passatempo(nome)
                VALUES(
                    "${req.body.nomePassatempo}"
                )
                `
            )

        res.status(201).send('Estudante criado com sucesso!')
        
    } catch (error) {
        res.status(500).send("Todos os campos devem ser preenchidos")
    }
}

export default createStudant;