
describe("Initialize data variables", () => {
    
    it("Returns number for right guesses", () => {
        Game.init();
        expect(Game.rightWords).toEqual(0);
    });
    it("Returns non-empty array", () => {
        Game.init();
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
        let temp = Game.curWord;
        expect(Game.checkGuess(Game.curWord)).toBe(true);
        expect(Game.checkGuess('neverrightword')).toBe(false);
    })
})

