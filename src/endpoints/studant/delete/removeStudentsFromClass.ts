import { connection } from "../../../connection";
import { Request, Response } from 'express'

const removeStudentFromClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id)

        if(isNaN(id) === true) throw new Error("Invalid Id.")

        await connection.raw(`
            UPDATE Students
            SET class_id = null
            WHERE id = "${id}"
        `)
        
        res.status(200).send('Student removed successfully.')
        
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}
export default removeStudentFromClass