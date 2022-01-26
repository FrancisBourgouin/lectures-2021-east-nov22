describe("Einstein Rosen Bridges", () => {
  it("visit google", () => {
    cy.visit("https://google.com");
  });
  it("can type", () => {
    cy.get(".gLFyf").type("Einstein-Rosen Bridge{enter}");
  });
  it("should show wormhole results", () => {
    cy.get(":nth-child(1) > .g > .jtfYYd > .jGGQ5e > .yuRUbf > a > .LC20lb").should(
      "include.text",
      "Wormhole"
    );
  });
});
