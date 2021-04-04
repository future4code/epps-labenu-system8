export const notFound = (value: string[]) =>{
    if(value.length === 0) throw new Error('No teacher found')
}