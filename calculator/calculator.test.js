const { add } = require("./calculator.js");

// test away!
// it('runs the tests', () => {
//   //make an assertion
//     expect(true).toBe(true); //toBe is a matcher
// })

describe("calculator.js", () => {
  describe("add()", () => {
    it("should return the sum of the numbers passed", () => {
      expect(add(2, 2)).toBe(4);
      expect(add(2, 3)).toBe(5);
    });

    it('should return 0 when called with no arguments', () => {
      //AAA thinking
      //1. Arrange
      //2. Act
      //3. Assert

      //arrange
      const expected = 0;

      // act
      const actual = add();

      //assert
      expect(actual).toBe(expected);
    });

    it('it should return the passed in value when only 1 argument is provided', () => {
      expect(add(2)).toBe(2);
      expect(add(-1)).toBe(-1);
    });

    it('should handle any number of arguments separated by a coma', () => {
      expect(add(1, 2, 3)).toBe(6);
      expect(add(1, 2, 3, 5)).toBe(11);
    })

    it('should handle an array of numbers', () => {
      expect(add([1, 2, 3])).toBe(6);
      expect(add([1, 2, 3, 5])).toBe(11);
    })
  });
});
