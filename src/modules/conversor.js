function conversor(tempo) {
    minutos = parseInt(tempo)
    segundos = tempo - minutos
    percentualDeMinuto = Math.round(segundos * 100) / 60
    conversao = minutos + percentualDeMinuto
    return conversao
}

function segundos(tempo) {
    totalSegundos = parseInt(conversor(tempo) * 60)
    return totalSegundos
}

module.exports = segundos