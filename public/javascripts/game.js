const Game = {
    running: false,
    score: 0,
    timer: null,
    wrongGuesses: 0,
    wordList: null,
    rightWords: null,
    wrongWords: null,
    curWord: null,
    scrambledWord: null,
    words: new Stack(),
    init: async () => {
        Game.running = true;
        if (document.querySelector('#timer')) {
            Game.timerEl = document.querySelector('#timer');
        }
        Game.rightWords = 0;
        Game.wrongWords = 0;
        Game.wordList = [];
        Game.timer = clockTime;
        await Game.getList();
        await Game.update();
    },
    update:  () => {
        if (!Game.running) return;
        if (!Game.curWord) {
            Game.getWord();
            Game.score = Game.rightWords;    
        }
        $('#score').text(Game.rightWords);
        $('#scrambled').text(Game.scrambledWord);
    }
}

Game.getList =  async () => {
    return tempData = await $.get('/wordList').then(data => {
        data = Game.scrambleList(data);
        data.map((word) => {
            Game.words.push(word); // pushes each word into Stack data structure
        });
        return Game.words;
    });
}

Game.scramble = (word) => {
    if (!word) return;
    let tmp = word;
    let arr = [];
    if (tmp.indexOf(' ') !== -1) {
        arr = tmp.split(' ');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = Game.randomize(arr[i]);
        }
        return arr.join(' ');
    }
    tmp = Game.randomize(tmp);
    while (tmp === word) {
        tmp = Game.randomize(tmp);
    }
    return tmp;
}

Game.randomize = (tmp) => {
    let flag = true,
        len = tmp.length,
        word = tmp;

    if (typeof tmp === 'string') {  // if argument is string split to randomize characters 
        tmp = tmp.split('');        // and set flag to false to avoid array scrambling
        flag = false;
    } 
    for (let i = len - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        [tmp[i], tmp[r]] = [tmp[r],tmp[i]];
    }
    if ( !flag && tmp.join('') === word) {
        Game.randomize(tmp.join(''));
    } 
    return flag ? tmp : tmp.join('')
}

Game.scrambleList = (list) => {
    let tmp = list;
    tmp = Game.randomize(list);
    return tmp;
}

Game.getWord = () => {
        Game.curWord = Game.words.pop();
        console.log(`before: ${Game.curWord}`)
        Game.scrambledWord = Game.scramble(Game.curWord);
        console.log(`after: ${Game.curWord}`)
        return Game.scrambledWord;
}


Game.gameOver = async () => {
    Game.running = false;
    Game.timer = null;
    $('#userGuess').attr('disabled','true');
    $('#guessButton').attr('disabled','true');
    
    let userScore = Game.score;
    let userWrong = Game.wrongWords;

     highscores = await $.get(`/getHighscores?name=${Game.userName}&score=${userScore}&wrong=${userWrong}`).then(data => {
        console.log("data", data);
        return data;
        });
        console.log("highscores", highscores);
}
Game.checkGuess = (guess) => {
    console.log(`Guess: ${guess} \n curWord: ${Game.curWord}`);

    if (guess.toLowerCase() === Game.curWord) {
        Game.rightWords++;
        Game.wrongGuesses = 0;
        Game.curWord = null;
        Game.update();
        return true;
    } else {
        Game.wrongGuesses += 1;
        if (Game.wrongGuesses >= 3) {
            Game.curWord = null;
            game.wrongWords++;
            Game.update();
            Game.wrongGuesses = 0;
        }
    }
    return false;
}