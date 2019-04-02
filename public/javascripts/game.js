const Game = {
    running: false,
    score: 0,
    clock: clockTime,
    wrongGuesses: 0,
    wordList: null,
    rightWords: null,
    wrongWords: null,
    data: null,
    init: async () => {
        await Game.getList();
        Game.one = true;
    }
}

Game.getList =  async () => {
    return tempData = await $.get('/wordList').then(data => {
        Game.data = data;
        return Game.data;
    });
}

Game.scramble = (word) => {
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

Game.update = () => {

}
