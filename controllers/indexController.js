const fs = require('fs');

module.exports = {
    index,
    modal,
    game
}


function index(req, res, next) {
    // data = fs.readFile('terminology.txt', (data) => data);
    // console.log(data);
    res.render('index', { title: 'Mumbo Jumbo' });
}

function game(req,res,next) {

    res.render('partials/game', {});
}

function modal(req,res,next) {
    res.render('partials/modal', {});
}