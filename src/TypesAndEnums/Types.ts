import { Especialidades, Type } from './Enums'

export type  Docentes = {
    nome:string,
    email:string,
    data_nasc:string,
    turma_id:number,
    especialidade:Especialidades
}

export type updateClass = {
    tableName: Type,
    peapleClassId: number,
    peapleNewClassId: number
}