// convertendo timestamp para ano

export const timestampToYear = (timestamp: number) =>{
    const ageinYears = timestamp / 1000 / 60 / 60 / 24 / 365

    return ageinYears
}