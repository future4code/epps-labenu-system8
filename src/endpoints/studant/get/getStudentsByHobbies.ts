import { connection } from "../../../connection";
import { Request, Response } from 'express'
import { convertDate } from "../../../GlobalFunctions/aboutDate/convertDate";
import { student } from "../../../TypesAndEnums/Types";
import { notFound } from "../../../GlobalFunctions/error/notFound";

const getStudentsByHobbies = async (req: Request, res: Response): Promise<void> => {

  try {
    const QueryResult = await connection.raw(`
        SELECT * FROM Students WHERE hobbies IN (
            SELECT hobbies FROM Students
            GROUP BY hobbies HAVING COUNT(*) > 1
        );      
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

    notFound(students)

    res.status(200).send({
      students: students
    })

  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export default getStudentsByHobbies