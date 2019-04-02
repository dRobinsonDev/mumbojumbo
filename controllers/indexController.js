const fs = require('fs');

module.exports = {
    index,
    modal,
    game,
    wordList,
    runTests
}


function index(req, res, next) {
    res.render('index', { title: 'Mumbo Jumbo' });
}

function game(req,res,next) {
    res.render('partials/game', {});
}

function modal(req,res,next) {
    res.render('partials/modal', {});
}

function runTests(req,res,next) {
    res.render('testRunner', {});
}

async function wordList(req,res) {
    let data = [];
    await fs.readFileSync('./terminology.txt', 'utf-8').split('\n').forEach(function(line){
        data.push(line);
    });
    res.json(data);
}