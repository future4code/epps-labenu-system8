import {connection} from '../connection'

const updateClassStudant = async (classId: string, newClassId: string, tableName: string) =>{
    await connection.raw(`
        UPDATE ${tableName}
        SET class_id = "${newClassId}"
        WHERE id = "${classId}";
    `)
}
export default updateClassStudant;