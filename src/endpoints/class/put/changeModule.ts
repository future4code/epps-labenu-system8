import { connection } from "../../../connection";
import { Request, Response } from 'express'

const changeModule = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = {
            module: Number(req.query.module),
            id: Number(req.query.id)
        }

        if(isNaN(query.id) === true){
            throw new Error('Invalid id.')
        } else if(isNaN(query.module) === true){
            throw new Error('Invalid module.')
        }

        await connection.raw(`
            UPDATE Class
            SET module = ${query.module}
            WHERE id = "${query.id}"
        `)
        
        res.status(200).send('Module updated successfully.')
        
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}
export default changeModule