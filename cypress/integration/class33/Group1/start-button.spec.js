describe("the start button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("should displays on home page", () => {
    cy.get('[data-cy="start-button"]').should("be.visible");
  });

  it("should directs to find stroller page when it clicked", () => {
    cy.get('[data-cy="start-button"]').click();

    cy.location("pathname").should("eq", "/find_strollers");
  });
});
