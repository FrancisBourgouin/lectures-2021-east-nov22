describe("Weather Form + Buttons Interactions", () => {
  it("loads the page properly", () => {
    cy.visit("/");
  });
  it("can type in the form", () => {
    cy.get("input").type("Montréal");
    cy.get("input").should("have.value", "Montréal");
  });
  it("adds a button for the city that was typed", () => {
    cy.get("input").type("{enter}");

    cy.get("section div > button").should("have.length", 1);
  });
  it("clears the name of the city that was searched", () => {
    cy.get("input").should("have.value", "");
  });
});

describe("Buttons Duplicates", () => {
  it("loads the page properly", () => {
    cy.visit("/");
  });
  it("can type in the form", () => {
    cy.get("input").type("Montréal");
    cy.get("input").should("have.value", "Montréal");
  });
  it("adds a button for the city that was typed", () => {
    cy.get("input").type("{enter}");
    cy.get("section div > button").should("have.length", 1);
  });
  it("doesn't add a duplicate button when clicking on a button", () => {
    const button = cy.get("section div > button");

    button.click();

    cy.get("section div > button").should("have.length", 1);
  });
});

describe("Form Duplicates", () => {
  it("loads the page properly", () => {
    cy.visit("/");
  });
  it("can add a button", () => {
    cy.get("input").type("Montréal");
    cy.get("input").should("have.value", "Montréal");
    cy.get("input").type("{enter}");
    cy.get("section div > button").should("have.length", 1);
  });
  it("should not add a second button", () => {
    cy.get("input").type("Montréal");
    cy.get("input").should("have.value", "Montréal");
    cy.get("input").type("{enter}");
    cy.get("section div > button").should("have.length", 1);
  });
});

describe("Search for city, then another and revisit first city", () => {
  it("loads the page properly", () => {
    cy.visit("/");
  });
  it("should not show the history of cities", () => {
    cy.get('[data-testid="cityHistoryList"] > h1').should("not.exist");
  });
  it("should show weather info for city when searched", () => {
    cy.get("input").type("Montréal{enter}");
    cy.get("div.CurrentWeather > h1").should("have.text", "Current Weather");
  });
  it("should show the history of cities", () => {
    cy.get("input").type("Ottawa{enter}");
    cy.get('[data-testid="cityHistoryList"] > h1').should("exist");
  });
});
