
describe("Initialize data variables", () => {
    it("Returns number for right guesses", () => {
        expect(Game.rightWords).toEqual(0);
    });
    it("Returns non-empty array", () => {
        expect(Game.data).not.toEqual(null);
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

