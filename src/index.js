import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import WebApp from './App.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR Document</title>
    </head>
    <body>
        <div id="root"> ${renderToString(<WebApp />)}</div>
    </body>
    </html>
    `)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})