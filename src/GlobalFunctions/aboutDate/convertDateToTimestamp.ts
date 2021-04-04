// converte datas para timestamp

export const convertDateToTimestamp = (date: string) => {
    const myDate = date
    const newMyDate = myDate.split("/")
    const newDate = new Date(Number(newMyDate[2]), (Number(newMyDate[1]) -1), Number(newMyDate[0]))

    return newDate.getTime()
}