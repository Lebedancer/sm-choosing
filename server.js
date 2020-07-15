const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
const port = 3001

app.post('/board/delete', (req, res) => {
    setTimeout(() => res.sendStatus(200), 2000)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))