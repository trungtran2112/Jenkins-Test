const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1> Test message <h1>'))

app.listen(port, () => console.log('Listening on port ' + port))
