function conversor(tempo) {
    /* digitar o tempo no formao minutos.segundos;
    para o usuário, será retornado o valor em minuto.percentual de minuto.
    ex.: se deseja colocar 1m30s no conversor, digite 1.30 ou 1.3;
    o valor retornado será 1.5, equivalente a um minuto e meio. */
    minutos = parseInt(tempo)
    segundos = tempo - minutos
    percentualDeMinuto = Math.round(segundos * 100) / 60
    conversao = minutos + percentualDeMinuto
    return conversao
}

function segundos(tempo) {
    /* digitar o tempo no formao minutos.segundos;
    para o usuário, será retornado o valor em segundos.
    ex.: se deseja colocar 1m01s nesta função, digite 1.01;
    o valor retornado será 61: 1 (60 segundos) + 0.01 (1 segundo). */
    totalSegundos = Math.round(conversor(tempo) * 60)
    return totalSegundos
}

function stringMinutagem(tempo) {
    min = parseInt(conversor(tempo))
    seg = Math.round((conversor(tempo) - min) * 60)
    if (seg < 10) {
        return `${min}:0${seg}`
    } else {
        return `${min}:${seg}`
    }
}

module.exports = segundos