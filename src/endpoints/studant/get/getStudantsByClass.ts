import { connection } from "../../../connection";
import { Request, Response } from 'express'

 const getStudantsByClass = async (req:Request, res:Response): Promise<void> => {

  try {
    const result = await connection.raw(`
        SELECT Students.name
        FROM Students 
        JOIN Class 
        ON Students.class_id = "${req.params.id}"
    `);

    
    res.status(200).send(result[0])

  } 
  catch (error) {
    res.status(500).send("Erro o encontrar os alunos dessa turma");
  }
};

export default getStudantsByClass