describe("check logIn", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="nav-login-button"]').click();
  });

  it("Check valid email and password", () => {
    // Enter username and password in form inputs
    cy.get('[data-cy="input-email"]').type("user@gmail.com");
    cy.get('[data-cy="input-password"]').type("12345");
    cy.get('[data-cy="input-submit"]').click();
    // Successfully route to `/find_strollers` path
    cy.location("pathname").should("include", "/find_strollers");
    // Ensure user avatar is visible in navbar
    cy.get('[data-cy="nav-login-avatar"]').should("be.visible");
    // Ensure user name is visible in avatar dropdown
    cy.get('[data-cy="nav-login-avatar"]').then((button) => {
      button[1].click();
    });
    cy.get('[data-cy="avatar-dropdown-user"]').should("be.visible");
    // Ensure user logout button is visible in avatar dropdown
    cy.get('[data-cy="avatar-dropdown-logout"]').should("be.visible");
  });

  it("Check invalid password and valid email", () => {
    cy.get('[data-cy="input-email"]').type("user@gmail.com");
    cy.get('[data-cy="input-password"]').type("1234").type("{enter}");
    cy.get('[data-cy="input-message"]')
      .invoke("text")
      .should("eq", "Wrong password");
  });

  it("Check invalid email and valid password", () => {
    cy.get('[data-cy="input-email"]').type("usergmail.com");
    cy.get('[data-cy="input-password"]').type("12345").type("{enter}");
    cy.get('[data-cy="input-message"]')
      .invoke("text")
      .should("eq", "User not found");
  });

  it("Check blank password and valid email.", () => {
    cy.get('[data-cy="input-email"]').type("user@gmail.com");
    cy.get('[data-cy="input-password"]');
    cy.get('[data-cy="input-submit"]').click();
    cy.get('[data-cy="input-message"]')
      .invoke("text")
      .should("eq", "You need to provide a password");
  });

  it("Check blank email and valid password.", () => {
    cy.get('[data-cy="input-email"]');
    cy.get('[data-cy="input-password"]').type("12345");
    cy.get(".tertiary-button").click();
    cy.get('[data-cy="input-message"]')

      .invoke("text")
      .should("eq", "You need to provide an email");
  });

  it("Check bullets in password field.", () => {
    cy.get('[data-cy="input-password"]')
      .invoke("attr", "type")
      .should("include", "password");
  });

  it("Check `Enter` key", () => {
    cy.get('[data-cy="input-email"]').type("user@gmail.com");
    cy.get('[data-cy="input-password"]').type("12345").type("{enter}");
    cy.location("pathname").should("include", "/find_strollers");
  });

  it("Check invalid email and password", () => {
    cy.get('[data-cy="input-email"]').type("usergmail.com");
    cy.get('[data-cy="input-password"]').type("1234").type("{enter}");
    cy.location("pathname").should("not.include", "/find_strollers");
  });

  it("Check blank email and password", () => {
    cy.get('[data-cy="input-email"]');
    cy.get('[data-cy="input-password"]');
    cy.get(".tertiary-button").click();
    cy.get('[data-cy="input-message"]')
      .invoke("text")
      .should("eq", "You need to provide an email and a password");
  });
});
