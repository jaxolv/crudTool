const segundos = require('../src/modules/conversor')
const express = require('express')  // incluindo o módulo 'express' no code;
const { v4 } = require('uuid')      // incluindo o módulo específico de 'uuid';

const app = express()               // instanciando o 'express' em 'app';

app.use(express.json())             // condicionando a estrutura a ser usada nas requisições e respostas;

const discografia = []
let ordemDuracao = []
let ordemAno = []

app.post("/discos", (req, res) => {
    const { nome, ano, faixas, duracao, streaming } = req.body
    const album = { id: v4(), nome, ano, faixas, duracao: segundos(duracao), streaming }
    discografia.push(album)
    return res.json(album)
})

app.get("/discos", (req, res) => {
    return res.json(discografia)
})

app.get("/discos/id/ano", (req, res) => {
    ordemAno = discografia.sort(function (a, b) {
        return a.ano - b.ano
    })
    return res.json(ordemAno)
})

app.get("/discos/id/duracao", (req, res) => {
    ordemDuracao = discografia.sort(function (a, b) {
        return b.duracao - a.duracao
    })
    return res.json(ordemDuracao)
})

app.put("/discos/:id", (req, res) => {
    const { id } = req.params

    const albumIndice = discografia.findIndex((disco) => disco.id == id)

    if (albumIndice < 0) {
        return res.status(404).json({ "not found": "you've must be misunderstood about the id" })
    }
    
    const { add } = req.body
    
    discografia[albumIndice].faixas = add
    
    return res.status(200).json({ "ok": "tracklist add to album charts" })

})

app.delete("/discos/:id", (req, res) => {
    const { id } = req.params

    albumIndice = discografia.findIndex((disco) => disco.id == id)
    
    if (albumIndice < 0) {
        return res.status(404).json({ "not found": "you've must be misunderstood about the id" })
    }

    discografia.splice(albumIndice, 1)

    return res.status(200).json({"ok": "album deleted"})

})

app.listen(8080, () => {
    console.log(segundos(1.01))
})
