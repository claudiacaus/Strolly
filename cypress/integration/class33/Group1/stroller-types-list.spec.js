describe("stroller list options", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="nav-stroller_info-dropdown"]').click();
  });
  it("should show dropdown list of 4 stroller types", () => {
    cy.get('[data-cy="nav-selected-type"] a').should("have.length", 4);
  });
});
