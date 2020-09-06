const myMath = require("./mymath.js");

describe("sum", () => {
  it("it should sum the two values given", () => {
    expect(myMath.sum(1, 1)).toBe(2);
  });
});
