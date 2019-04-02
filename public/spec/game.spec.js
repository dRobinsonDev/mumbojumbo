
describe("Initialize data variables", () => {
    Game.init();
    it("Returns number for right guesses", () => {
        expect(Game.rightWords).toEqual(0);
    });
    it("Returns non-empty array", () => {
        expect(Game.words).not.toEqual(null);
    });

});
describe("Grab list of words", () => {
    let data = ["hello"];
    it("Returns Array", () => {
        expect(data).toEqual((jasmine.any(Array)));
    });
    it("Returns non-empty array", () => {
        expect(data).not.toEqual(0);
    });
});

describe("Scramble the  words", () => {
    it ('Returns scrambled word',  () => {
         expect(Game.scramble("hello")).not.toEqual("hello");
         expect(Game.scramble("operating system")).not.toEqual("operating system");
    });
});

describe("Game timer initializes", () => {
    it('Checks if Game timer works', () => {
        let timer = clockTime;
        expect(timer).toEqual(jasmine.any(Object));
    })
})

describe("Check user guess", () => {
    it('Checks if user guessed correct word', () => {
        let temp = Game.currentWord;
        Game.curWord = 'hello';
        expect(Game.checkGuess('hello')).toBe(true);
        expect(Game.checkGuess('hello')).toBe(true);
        Game.curWord = temp;
    })
})

