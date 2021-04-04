import { Request, Response } from 'express'
import getAge from "../../GlobalFunctions/aboutDate/getAge";
import { capitalize } from '../../GlobalFunctions/capitalize/capitalize';
import { data } from '../../TypesAndEnums/Types';

const getStudentAge = async (req: Request, res: Response): Promise<void> => {

  try {
    const data: data = {
      id: req.query.id as string,
      tableName: capitalize(req.query.tableName as string)
    }

    const age: number = await getAge(data.id, data.tableName)

    res.status(200).send({ Age: age })

  }
  catch (error) {
    res.status(500).send(error.message);
  }
};

export default getStudentAge;