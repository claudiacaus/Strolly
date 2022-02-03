
describe("the footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("should displays footer with contact details", () => {
    cy.get('[data-cy="footer-info"]')
    .should('be.visible')
  });


});