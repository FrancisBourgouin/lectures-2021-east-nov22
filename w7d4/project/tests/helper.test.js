const { round } = require("../helper");

describe("round function", () => {
  it("returns NaN when given something else than a number", () => {
    const result = round("Hello");
    const expectedResult = true;

    expect(Number.isNaN(result)).to.beTrue();
  });
});
