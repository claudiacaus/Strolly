describe("check stroller cards", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="nav-find_stroller-button"]').click();
    cy.get('[data-cy="city-options"]')
      .select("Amsterdam")
      .should("have.value", "1");
  });

  it("check when each of the location pins are clicked it displays all stroller types in cards", () => {
    // the first two should be merged
    cy.get('[data-cy="map-location-pins1"]').click({ force: true });
    cy.get('[data-cy="card-list"]').should("be.visible");

    cy.get('[data-cy="map-location-pins2"]').click({ force: true });
    cy.get('[data-cy="card-list"]').should("be.visible");

    cy.get('[data-cy="map-location-pins3"]').click({ force: true });
    cy.get('[data-cy="card-list"]').should("be.visible");

    cy.get('[data-cy="map-location-pins4"]').click({ force: true });
    cy.get('[data-cy="card-list"]').should("be.visible");

    cy.get('[data-cy="map-location-pins5"]').click({ force: true });
    cy.get('[data-cy="card-list"]').should("be.visible");
  });

  it("check the cards displays on the find stroller page", () => {
    cy.get('[data-cy="map-location-pins1"]').click({ force: true });
    cy.get('[data-cy="card-item"]').should("be.visible");

    cy.get('[data-cy="map-location-pins2"]').click({ force: true });
    cy.get('[data-cy="card-item"]').should("be.visible");

    cy.get('[data-cy="map-location-pins3"]').click({ force: true });
    cy.get('[data-cy="card-item"]').should("be.visible");

    cy.get('[data-cy="map-location-pins4"]').click({ force: true });
    cy.get('[data-cy="card-item"]').should("be.visible");

    cy.get('[data-cy="map-location-pins5"]').click({ force: true });
    cy.get('[data-cy="card-item"]').should("be.visible");
  });

  it(" check each card has stroller type, img, number, price, reservation button and full description link", () => {
    cy.get('[data-cy="map-location-pins1"]').click({ force: true });
    cy.get('[data-cy="card-title"]').should("be.visible");

    cy.get('[data-cy="map-location-pins1"]').click({ force: true });
    cy.get('[data-cy="card-img"]').should("be.visible");

    cy.get('[data-cy="map-location-pins1"]').click({ force: true });
    cy.get('[data-cy="card-available-number"]').should("be.visible");

    cy.get('[data-cy="map-location-pins1"]').click({ force: true });
    cy.get('[data-cy="card-prices"]').should("be.visible");

    cy.get('[data-cy="map-location-pins1"]').click({ force: true });
    cy.get(".tertiary-button").should("be.visible");

    cy.get('[data-cy="map-location-pins1"]').click({ force: true });
    cy.get('[data-cy="card-full-description"]').should("be.visible");
  });

  it("check when login-to-reserve button clicked it directs to login page", () => {
    cy.get('[data-cy="map-location-pins1"]').click({ force: true });
    cy.get('[data-cy="card-reserve-button-login"]').then((buttons) => {
      // get the first button
      buttons[0].click();
    });

    cy.location("pathname").should("eq", "/login");
  });

  it("check when full description link clicked it directs to stroller info pages", () => {
    cy.get('[data-cy="map-location-pins1"]').click({ force: true });

    cy.get('[data-cy="card-full-description"]').then((buttons) => {
      // get the first button
      buttons[0].click();
    });
  });
});
