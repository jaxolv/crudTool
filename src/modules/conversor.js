function conversor(tempo) {
    /* digitar o tempo no formato minutos.segundos;
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
    /* digitar o tempo no formato minutos.segundos;
    para o usuário, será retornado o valor em segundos.
    ex.: se deseja colocar 1m01s nesta função, digite 1.01;
    o valor retornado será 61: 1 (60 segundos) + 0.01 (1 segundo). */
    totalSegundos = parseInt(conversor(tempo) * 60)
    return totalSegundos
}

module.exports = segundos
