
describe("the Infograph", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("should displays usage infograph texts ", () => {
    cy.get('[data-cy="info-text"]')
    .should('be.visible')
  });
  it("should displays usage infograph images ", () => {
    cy.get('[data-cy="info-img"]')
    .should('be.visible')
  });
});