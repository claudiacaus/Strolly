describe("find stroller button", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="nav-find_stroller-button"]').click();
  });

  it("should routes to the find stroller page ", () => {
    cy.location("pathname").should("equal", "/find_strollers");
  });

  it("check the dropdown list have Amsterdam, Groningen, DenHaag, Deventer cities", () => {
    cy.get('[data-cy="select-city-name1"]')
      .invoke("text")
      .should("eq", "Amsterdam");
    cy.get('[data-cy="select-city-name2"]')
      .invoke("text")
      .should("eq", "Groningen");
    cy.get('[data-cy="select-city-name3"]')
      .invoke("text")
      .should("eq", "Den Haag");
    cy.get('[data-cy="select-city-name4"]')
      .invoke("text")
      .should("eq", "Deventer");
  });

  it("should display a map", () => {
    cy.get('[data-cy="city-options"]')
      .select("Amsterdam")
      .should("have.value", "1");
    cy.get('[data-cy="map-location-pins1"]').should("be.visible");
  });

  it("should display stroller location pins in the map", () => {
    cy.get('[data-cy="select-city-name1"]').should("have.value", "1");
    cy.get('[data-cy="map-location-pins1"]').should("be.visible");
    cy.get('[data-cy="map-location-pins2"]').should("be.visible");
    cy.get('[data-cy="map-location-pins3"]').should("be.visible");
    cy.get('[data-cy="map-location-pins4"]').should("be.visible");
    cy.get('[data-cy="map-location-pins8"]').should("be.visible");

    cy.get('[data-cy="select-city-name2"]').should("have.value", "2");
    cy.get('[data-cy="map-location-pins5"]').should("be.visible");
    cy.get('[data-cy="map-location-pins6"]').should("be.visible");
    cy.get('[data-cy="map-location-pins7"]').should("be.visible");

    cy.get('[data-cy="select-city-name4"]').should("have.value", "4");
    cy.get('[data-cy="map-location-pins12"]').should("be.visible");
    cy.get('[data-cy="map-location-pins15"]').should("be.visible");
    cy.get('[data-cy="map-location-pins16"]').should("be.visible");
    cy.get('[data-cy="map-location-pins17"]').should("be.visible");
    cy.get('[data-cy="map-location-pins18"]').should("be.visible");

    cy.get('[data-cy="select-city-name3"]').should("have.value", "3");
    cy.get('[data-cy="map-location-pins9"]').should("be.visible");
    cy.get('[data-cy="map-location-pins10"]').should("be.visible");
    cy.get('[data-cy="map-location-pins11"]').should("be.visible");
    cy.get('[data-cy="map-location-pins13"]').should("be.visible");
    cy.get('[data-cy="map-location-pins14"]').should("be.visible");
  });
});
