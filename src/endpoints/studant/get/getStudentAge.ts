import { Request, Response } from 'express'
import getAge from "../../../GlobalFunctions/aboutDate/getAge";

const getStudentAge = async (req: Request, res: Response): Promise<void> => {

  try {
    const age: number = await getAge(req.params.id)

    res.status(200).send({Age: age})

  }
  catch (error) {
    res.status(500).send(error.message);
  }
};

export default getStudentAge;