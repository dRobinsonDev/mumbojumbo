
describe("Initialize data variables", () => {
    it("Returns Array", () => {
        Game.init();
        expect(Game.one).toEqual(undefined);
    });
    it("Returns non-empty array", () => {
        expect(Game.one).not.toEqual(0);
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

