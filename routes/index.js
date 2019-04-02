const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/game', indexController.game);
router.get('/modal', indexController.modal);
router.get('/wordList', indexController.wordList);
router.get('/test', indexController.runTests);

module.exports = router;
