const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

const lista = [
  {
    id: 1,
    nome: "Emanuel",
    phone: "988776644"
  },
  {
    id: 2,
    nome: "Rodrigues",
    phone: "988776655"
  },
  {
    id: 3,
    nome: "Ash",
    phone: "988776666"
  }
]

app.listen(3000, () => console.log('server up'))

app.get('/agenda', (req, res) => {
    res.send(lista)
})

app.get('/agenda/:id', (req, res) => {
    const idContato = req.params.id;
    const contato = lista.find(function (contato) {
        return contato.id == idContato
    })

    res.json(contato)
})


app.delete('/agenda/:id', (req, res) => {
    const index = lista.find((contato, index) => {
        if(contato.id === req.params.id){
            return index
        }
    })
    lista.pop(index)
    res.send({msg: 'ok'})
})
app.post('/agenda', (req, res) => {
    const {name, phone} = req.body || ''
    const id = lista.length + 1
    const pessoa = {id, name, phone}
    lista.push(pessoa)
    res.send({pessoa})
})

