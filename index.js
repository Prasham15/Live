require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('My name is Prasham and this is Singapore.')
})

app.get('/who', (req,res) => {
    res.send("<h1>My number is 325</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})