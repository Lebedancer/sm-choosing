const express = require('express')
var cors = require('cors')
var app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const port = 3001

app.get('/boardInfo', (req, res) => {
    setTimeout(() => res.json({
        boardName: 'Flavio',
        boardId: 1
    }), 2000)
});

app.post('/boardInfo/changeTitle', (req, res) => {
    setTimeout(() => res.sendStatus(200), 2000)
});


app.get('/userData', (req, res) => {
    setTimeout(() => res.json({
        userId: 12,
        userName: 'Ololo'
    }), 2000)
});

app.get('/accessRulesForBoard', (req, res) => {
    const boardId = +req.query.boardId;
    if (boardId === 1) {
        setTimeout(() => res.json({
            userRole: 'guest'
        }), 2000)
    }

    if (boardId === 2) {
        setTimeout(() => res.json({
            userRole: 'admin'
        }), 2000)
    }

    if (boardId === 3) {
        setTimeout(() => res.json({
            userRole: 'participant'
        }), 2000)
    }


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
        {
            boardName: '33333',
            boardId: 4
        },
        {
            boardName: '5555555',
            boardId: 5
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