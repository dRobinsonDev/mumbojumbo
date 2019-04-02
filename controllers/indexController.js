const fs = require('fs');

module.exports = {
    index,
    game,
    getHighscores,
    highscores,
    modal,
    runTests,
    wordList
}


function index(req, res, next) {
    res.render('index', { title: 'Mumbo Jumbo' });
}

function game(req,res,next) {
    res.render('partials/game', {});
}

function getHighscores(req,res,next) {
    let query = "SELECT * FROM `highscores` ORDER BY `score` DESC limit 10"; // query database to get all the players
    let result = db.query(query, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        if (result[result.length -1].score < req.query.score) {
            let {name, score, wrong} = req.query; // destructure url query
            let query = `INSERT INTO highscores (name, score, wrong) VALUES (${name}, ${score}, ${wrong});`
        }
        return result
    });
    return result;
}
function highscores(req,res,next) {
    let query = "SELECT * FROM `highscores` ORDER BY `score` DESC limit 10"; // query database to get all the players

    // execute query
    db.query(query, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        console.log(result);
        return res.render('highscores', {title: 'High Scores', highscores: result})
    });
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