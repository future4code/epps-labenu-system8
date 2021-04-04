// adiciona 0 nos dates e nos months quando eles estão na casa de unidade.

export const addZero = (numero: number) => {
    if (numero <= 9)
        return "0" + numero;
    else
        return numero;
}
