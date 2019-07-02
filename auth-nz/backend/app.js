const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(
    bodyParser.raw({
        limit: '10gb',
        type: '*/*'
    })
)
app.listen(8080)

app.get('*', (req, res) => res.send(req.body))
app.post('*', (req, res) => res.send(req.body))
