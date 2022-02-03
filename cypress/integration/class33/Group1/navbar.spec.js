describe("the navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should displays stroller info button ", () => {
    cy.get('[data-cy="nav-stroller_info-dropdown"]')
      .click()
      .should("be.visible");
  });

  it("should displays find stroller button", () => {
    cy.get('[data-cy="nav-find_stroller-button"]').should("be.visible");
  });

  it("should displays about button", () => {
    cy.get('[data-cy="nav-about-button"]').should("be.visible");
  });

  it("should displays contact button", () => {
    cy.get('[data-cy="nav-contact-button"]').should("be.visible");
  });

  it("should displays sign up button", () => {
    cy.get('[data-cy="nav-login-button"]').should("be.visible");
  });
});
