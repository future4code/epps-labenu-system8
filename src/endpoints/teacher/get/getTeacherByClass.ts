import { connection } from "../../../connection";
import { Request, Response } from 'express'
import { convertDate } from "../../../GlobalFunctions/aboutDate/convertDate";
import { teacher } from "../../../TypesAndEnums/Types";
import { notFound } from "../../../GlobalFunctions/error/notFound";

const getTeacherByClass = async (req: Request, res: Response): Promise<void> => {

  try {
    const QueryResult = await connection.raw(`
        SELECT 
          C.class_name,
          T.id, 
          T.teachers_name,
          T.email,
          T.birthdate,
          T.speciality
        FROM Teachers T
        JOIN Class C
        ON T.class_id = "${req.params.id}"
    `)

    const teachers = QueryResult[0].map((teacher: teacher) => {
      return ({
        id: teacher.id,
        teachers_name: teacher.teachers_name,
        email: teacher.email,
        speciality: teacher.speciality,
        birthdate: convertDate(teacher.birthdate)
      })
    })

    notFound(teachers)

    res.status(200).send({
      className: QueryResult[0][0].class_name,
      teachers: teachers
    })

  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export default getTeacherByClass