import { connection } from '../../connection'
import { convertDate } from './convertDate'
import { convertDateToTimestamp } from './convertDateToTimestamp'
import { currentDate } from './currentDate'
import { timestampToYear } from './timestampToYear'

// pegando idade da pessoa

export const getAge = async (idUser: string, tableName: string) => {
    const birthdate = await connection.raw(`
    SELECT birthdate
    FROM ${tableName}
    WHERE id = "${idUser}"
    `)

    const dateNow = currentDate()
    const dataFormatada = convertDate(birthdate[0][0].birthdate)

    const timestampNow = convertDateToTimestamp(dateNow)
    const timestampAgePeople = convertDateToTimestamp(dataFormatada)

    const dateMilisecunds = timestampNow - timestampAgePeople
    const ageInYears = timestampToYear(dateMilisecunds)


    return Math.floor(ageInYears)
}
export default getAge;