import { connection } from "../../../connection";
import { Request, Response } from 'express'
import { convertDate } from "../../../GlobalFunctions/aboutDate/convertDate";
import { student } from "../../../TypesAndEnums/Types";

const getStudantsByClass = async (req: Request, res: Response): Promise<void> => {

  try {
    const QueryResult = await connection.raw(`
        SELECT 
          C.class_name,
          S.id, 
          S.student_name,
          S.email,
          S.birthdate,
          S.hobbies
        FROM Students S
        JOIN Class C
        ON S.class_id = "${req.params.id}"
    `)

    const students = QueryResult[0].map((student: student) => {
      return ({
        id: student.id,
        student_name: student.student_name,
        email: student.email,
        hobbies: student.hobbies,
        birthdate: convertDate(student.birthdate)
      })
    })

    res.status(200).send({
      className: QueryResult[0][0].class_name,
      student: students
    })

  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export default getStudantsByClass