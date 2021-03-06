import { Request, Response } from 'express';
import updateClassStudant from '../../../GlobalFunctions/updateClass';
import { updateClass } from '../../../TypesAndEnums/Types'

const changeClass = async (req: Request,
    res: Response) => {
    try {
        let errorCode: number = 400
        const body: updateClass = {
            tableName: req.body.tableName,
            peapleClassId: req.body.peapleClassId,
            peapleNewClassId: req.body.peapleNewClassId
        }

        let valueRes: string = ""
        if(body.tableName.toLowerCase() === 'teachers'){
            valueRes = "The Teacher was insert in class successfully."
        } 

        if(body.tableName.toLowerCase() === 'students'){
            valueRes = "The Student was insert in class successfully."
        }

        if(body.tableName !== 'Teachers' && body.tableName !== 'Students'){
            errorCode = 422
            throw new Error('tableName dont exist.')
        } else if (!body.peapleClassId) {
            errorCode = 422
            throw new Error('Invalid peapleClassId parameter.')
        } else if (!body.peapleNewClassId) {
            errorCode = 422
            throw new Error('Invalid peapleNewClassId parameter.')
        } else if (!body.tableName) {
            errorCode = 422
            throw new Error('Invalid talbleName parameter.')
        } else {
            await updateClassStudant(body.peapleClassId, body.peapleNewClassId, body.tableName)
            res.status(200).send({message: String(valueRes)})
        }

    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error.message })
    }
}
export default changeClass;