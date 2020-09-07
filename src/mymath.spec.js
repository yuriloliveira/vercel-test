const myMath = require("./mymath.js");

describe("sum", () => {
  it("it should sum the two values given", () => {
    expect(myMath.sum(1, 1)).toBe(2);
  });

  it("it should accept numbers as string", () => {
    expect(myMath.sum("1", "1")).toBe(2);
  });

  it("it should ignore invalid values", () => {
    expect(myMath.sum(1, NaN)).toBe(1);
  });

  it("it should return 0 when no argument is passed", () => {
    expect(myMath.sum()).toBe(0);
  });

  it("it should fail", () => {
    expect(true).toBe(false);
  });
});
