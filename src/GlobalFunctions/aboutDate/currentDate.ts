import {convertDate} from './convertDate'

// pegando a data atual

export const currentDate = () =>{
    const date = new Date
    const newDate = convertDate(String(date))
    return newDate
}