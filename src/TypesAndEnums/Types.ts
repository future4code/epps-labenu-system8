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
    peapleClassId: string,
    peapleNewClassId: string
}

export type data = {
    id: string,
    tableName: string
}

export type student = {
    id: string,
    student_name: string,
    email: string,
    hobbies: string,
    birthdate: string
}

export type teacher = {
    id: string,
    teachers_name: string,
    email: string,
    speciality: string,
    birthdate: string
}