const Game = {
    running: false,
    score: 0,
    // clock: clockTime,
    wrongGuesses: 0,
    wordList: null,
    rightWords: 0,
    wrongWords: 0,
    data: []
}

const  init = async () => {
    getList();
}

 const getList =  async () => {
   return tempData = await $.get('/wordList').then(data => {
        Game.data = data;
        return Game.data;
    });
}

const scramble = (word) => {
    let tmp = word;
    let arr = [];
    if (tmp.indexOf(' ') !== -1) {
        arr = tmp.split(' ');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = randomize(arr[i]);
        }
        return arr.join(' ');
    }
    tmp = randomize(tmp);
    while (tmp === word) {
        tmp = randomize(tmp);
    }
    return tmp;
}

const randomize = (tmp) => {
    let flag = true;
    let len = tmp.length;
    let word = tmp;
    if (typeof tmp === 'string') {
        tmp = tmp.split('');
        flag = false;
    } 
    for (let i = len - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        [tmp[i], tmp[r]] = [tmp[r],tmp[i]];
    }
    if ( !flag && tmp.join('') === word) {
        randomize(tmp.join(''));
    } 
    return flag ? tmp : tmp.join('')
}

const scrambleList = (list) => {
    let tmp = list;
    tmp = randomize(list);
    return tmp;
}

const update = () => {

}
