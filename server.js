const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
const port = 3001

app.get('/boardInfo', (req, res) => {
    setTimeout(() => res.json({
        boardName: 'Flavio',
        boardId: 1
    }), 2000)
});

app.get('/dashboards', (req, res) => {
    setTimeout(() => res.json([{
        boardName: 'Flavio',
        boardId: 1
    }, {
        boardName: 'Bugaga',
        boardId: 2
    },{
        boardName: '222222',
        boardId: 3
    },
    ]), 2000)
});

app.get('/accessRules', (req, res) => {
    setTimeout(() => res.json({
        canShowShareButton: true
    }), 3000)
});

app.post('/board/delete', (req, res) => {
    setTimeout(() => res.sendStatus(200), 2000)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))