import {connection} from '../connection'

const updateClassStudant = async (classId: number, newClassId: number, tableName: string) =>{
    await connection.raw(`
        UPDATE ${tableName}
        SET turma_id = ${newClassId}
        WHERE turma_id = ${classId};
    `)
}
export default updateClassStudant;