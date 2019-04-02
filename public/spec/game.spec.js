
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
         expect(scramble("hello")).not.toEqual("hello");
         expect(scramble("operating system")).not.toEqual("operating system");
    });
});

// unneccessary test
// describe("Scrambles array of words", () => {
//     it ('Returns scrambled array',  () => {
//         let arrayList = ["hello", "array", "split"];
//          expect(scrambleList(arrayList).toString()).not.toEqual(arrayList);
//     });
// });
