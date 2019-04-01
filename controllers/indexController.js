module.exports = {
    index,
    modal,
    game
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