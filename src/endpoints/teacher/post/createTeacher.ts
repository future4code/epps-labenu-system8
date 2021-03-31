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
            INSERT INTO Docentes (nome, email, data_nasc, turma_id)
            VALUES(
                "${req.body.nome}",
                "${req.body.email}",
                "${req.body.data_nasc}",
                "${req.body.turma_id}"                
            )`)

            if(Especialidades.BACKEND === 'backend'){
                await connection.raw(
                    `
                    INSERT INTO Especialidade(nome)
                    VALUES(
                        "Backend"
                        )
                    `
                )
            } else if(Especialidades.CSS === 'css'){
                await connection.raw(
                    `
                    INSERT INTO Especialidade(nome)
                    VALUES(
                        "CSS"
                        )
                   `) 
            } else if (Especialidades.PROGRAMACAO_ORIENTADA_OBJETOS === 'programacao orientada objetos'){
                await connection.raw(
                    `
                    INSERT INTO Especialidade(nome)
                    VALUES(
                        "Programacao orientada objetos"
                        )
                   `) 
            } else if(Especialidades.REACT === 'react'){
                await connection.raw(
                    `
                    INSERT INTO Especialidade(nome)
                    VALUES(
                        "React"
                        )
                   `)
            } else if(Especialidades.REDUX === 'redux'){
                await connection.raw(
                    `
                    INSERT INTO Especialidade(nome)
                    VALUES(
                        "Redux"
                        )
                   `)
            } else if(Especialidades.TESTES === 'testes'){
                await connection.raw(
                    `
                    INSERT INTO Especialidade(nome)
                    VALUES(
                        "Testes"
                        )
                   `)
            } else if(Especialidades.TYPESCRIPT === 'typescript'){
                await connection.raw(
                    `
                    INSERT INTO Especialidade(nome)
                    VALUES(
                        "Typescript"
                        )
                   `)
            } else{
                throw new Error('Especialidade inválida: Especialidades suportadas: Backend, Css, Programacao Orientada Objeto, React, Redux, Testes, Typescript')
            }
            

        res.status(201).send('Professor criado com sucesso!')
        
    } catch (error) {
        res.status(500).send("Todos os campos devem ser preenchidos")
    }
}

export default createTeacher;