import { addZero } from './addZero'

// formata data para dd/mm/yyyy

export const convertDate = (valueDate: string) => {
    let data = new Date(valueDate.toString());
    let dataFormatada = (addZero((data.getDate()))) + "/" +
        (addZero((data.getMonth() + 1))) + "/" +
        data.getFullYear();
    return dataFormatada
}