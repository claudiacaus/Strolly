beforeEach("visit the home page page and click on stroller info button", () => {
  cy.visit("/");
  cy.get('[data-cy="nav-stroller_info-dropdown"]').click();
  cy.get('[data-cy="nav-selected-type1"]').click();
});

describe("1-check stroller type (single speed travel )", () => {
  it("shows the stroller type as a header ", () => {
    cy.get('[data-cy="stroller-header"]').should("be.visible");
  });

  it("shows the stroller image", () => {
    cy.get('[data-cy="stroller-img"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("shows the stroller description ", () => {
    cy.get('[data-cy="stroller-description"]').should("be.visible");
  });

  it("shows the stroller top features", () => {
    cy.get('[data-cy="stroller-top_feature"]').should("be.visible");
  });

  it("shows the stroller price", () => {
    cy.get('[data-cy="card-prices"]').should("be.visible");
  });
});

describe("2-check stroller type (2 kids , bed and seat )", () => {
  it("shows the stroller type as a header ", () => {
    cy.get('[data-cy="stroller-header"]').should("be.visible");
  });

  it("shows the stroller image", () => {
    cy.get('[data-cy="stroller-img"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("shows the stroller description ", () => {
    cy.get('[data-cy="stroller-description"]').should("be.visible");
  });

  it("shows the stroller top features", () => {
    cy.get('[data-cy="stroller-top_feature"]').should("be.visible");
  });

  it("shows the stroller price", () => {
    cy.get('[data-cy="card-prices"]').should("be.visible");
  });
});

describe("3-check stroller type (twins bed and seat)", () => {
  it("shows the stroller type as a header ", () => {
    cy.get('[data-cy="stroller-header"]').should("be.visible");
  });

  it("shows the stroller image", () => {
    cy.get('[data-cy="stroller-img"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("shows the stroller description ", () => {
    cy.get('[data-cy="stroller-description"]').should("be.visible");
  });

  it("shows the stroller top features", () => {
    cy.get('[data-cy="stroller-top_feature"]').should("be.visible");
  });

  it("shows the stroller price", () => {
    cy.get('[data-cy="card-prices"]').should("be.visible");
  });
});

describe("4-check stroller type (single and double)", () => {
  it("shows the stroller type as a header ", () => {
    cy.get('[data-cy="stroller-header"]').should("be.visible");
  });

  it("shows the stroller image", () => {
    cy.get('[data-cy="stroller-img"]')
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("shows the stroller description ", () => {
    cy.get('[data-cy="stroller-description"]').should("be.visible");
  });

  it("shows the stroller top features", () => {
    cy.get('[data-cy="stroller-top_feature"]').should("be.visible");
  });

  it("shows the stroller price", () => {
    cy.get('[data-cy="card-prices"]').should("be.visible");
  });
});
