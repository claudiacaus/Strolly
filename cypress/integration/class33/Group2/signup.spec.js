describe("check logIn", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="nav-login-button"]').click();
    cy.get('[data-cy="login-signup-link"]').click();
  });

  it("Check asterisk (*)", () => {
    cy.get('[data-cy="input-asterisk"]').should("be.visible");
  });

  it("Check valid credentials", () => {
    // cy.get('[data-cy="signup-first-name"]').type('John')
    // cy.get('[data-cy="signup-last-name"]').type('Doe')
    // cy.get('[data-cy="signup-email"]').type('test@gmail.com')
    // cy.get('[data-cy="signup-phone-number"]').type('8888888888')
    // cy.get('[data-cy="signup-password"]').type('11111')
    // cy.get('[data-cy="signup-confirm-password"]').type('11111')
    // cy.get('[data-cy="signup-checkbox"]').check()
    // cy.get('[data-cy="signup-submit"]').click()
    // cy.location('pathname').should('include','/checkout')
  });

  it("Check `Enter` key ", () => {
    // cy.get('[data-cy="signup-first-name"]').type('John')
    // cy.get('[data-cy="signup-last-name"]').type('Doe')
    // cy.get('[data-cy="signup-email"]').type('user@gmail.com')
    // cy.get('[data-cy="signup-phone-number"]').type('1234567890')
    // cy.get('[data-cy="signup-password"]').type('12345')
    // cy.get('[data-cy="signup-confirm-password"]').type('12345')
    // cy.get('[data-cy="signup-checkbox"]').check()
    // cy.get('[data-cy="signup-submit"]').type("{enter}")
    // cy.location('pathname').should('include','/checkout')
  });

  it("Check empty text field", () => {
    cy.get('[data-cy="signup-first-name"]').invoke("val").should("be.empty");
    cy.get('[data-cy="signup-last-name"]').invoke("val").should("be.empty");
    cy.get('[data-cy="signup-email"]').invoke("val").should("be.empty");
    cy.get('[data-cy="signup-phone-number"]').invoke("val").should("be.empty");
    cy.get('[data-cy="signup-password"]').invoke("val").should("be.empty");
    cy.get('[data-cy="signup-confirm-password"]')
      .invoke("val")
      .should("be.empty");
    cy.get('[data-cy="signup-checkbox"]').should("not.be.checked");
  });

  it("Check not registering with missing required field", () => {
    cy.get('[data-cy="signup-first-name"]').type("John");
    cy.get('[data-cy="signup-last-name"]').type("Doe");
    cy.get('[data-cy="signup-email"]');
    cy.get('[data-cy="signup-phone-number"]').type("1234567890");
    cy.get('[data-cy="signup-password"]').type("12345");
    cy.get('[data-cy="signup-confirm-password"]').type("12345");
    cy.get('[data-cy="signup-checkbox"]').check();
    cy.get('[data-cy="signup-submit"]').type("{enter}");
    cy.location("pathname").should("eq", "/signup");
  });

  it("Check the email format", () => {
    cy.get('[data-cy="signup-first-name"]').type("John");
    cy.get('[data-cy="signup-last-name"]').type("Doe");
    cy.get('[data-cy="signup-email"]').type("usergmail.com");
    cy.get('[data-cy="signup-phone-number"]').type("1234567890");
    cy.get('[data-cy="signup-password"]').type("12345");
    cy.get('[data-cy="signup-confirm-password"]').type("12345");
    cy.get('[data-cy="signup-checkbox"]').check();
    cy.get('[data-cy="signup-submit"]').type("{enter}");
    cy.location("pathname").should("not.include", "/checkout");
    cy.reload();
    cy.get('[data-cy="signup-first-name"]').type("John");
    cy.get('[data-cy="signup-last-name"]').type("Doe");
    cy.get('[data-cy="signup-email"]').type("user@gmailcom");
    cy.get('[data-cy="signup-phone-number"]').type("1234567891");
    cy.get('[data-cy="signup-password"]').type("12345");
    cy.get('[data-cy="signup-confirm-password"]').type("12345");
    cy.get('[data-cy="signup-checkbox"]').check();
    cy.get('[data-cy="signup-submit"]').type("{enter}");
    cy.location("pathname").should("not.include", "/checkout");
  });

  it("Check phone number format", () => {
    cy.get('[data-cy="signup-first-name"]').type("John");
    cy.get('[data-cy="signup-last-name"]').type("Doe");
    cy.get('[data-cy="signup-email"]').type("man@gmail.com");
    cy.get('[data-cy="signup-phone-number"]').type("1234g67810");
    cy.get('[data-cy="signup-password"]').type("12345");
    cy.get('[data-cy="signup-confirm-password"]').type("12345");
    cy.get('[data-cy="signup-checkbox"]').check();
    cy.get('[data-cy="signup-submit"]').type("{enter}");
    cy.get('[data-cy="signup-status"]')
      .invoke("text")
      .should("eq", "phone number should be only numbers");
  });

  it("Check the phone number limit.", () => {
    cy.get('[data-cy="signup-phone-number"]').type("12345678912768");
    cy.get('[data-cy="signup-phone-number"]')
      .invoke("val")
      .should("have.length", "10");
  });

  it("Check spaces ", () => {
    cy.get('[data-cy="signup-first-name"]').type("John");
    cy.get('[data-cy="signup-last-name"]').type("Doe");
    cy.get('[data-cy="signup-email"]').type("user @gmail.com");
    cy.get('[data-cy="signup-phone-number"]').type("1234567893");
    cy.get('[data-cy="signup-password"]').type("12345");
    cy.get('[data-cy="signup-confirm-password"]').type("12345");
    cy.get('[data-cy="signup-checkbox"]').check();
    cy.get('[data-cy="signup-submit"]').type("{enter}");
    cy.location("pathname").should("not.include", "/checkout");
    cy.reload();
    cy.get('[data-cy="signup-first-name"]').type("John");
    cy.get('[data-cy="signup-last-name"]').type("Doe");
    cy.get('[data-cy="signup-email"]').type("user@gmail.com");
    cy.get('[data-cy="signup-phone-number"]').type("12345 67891");
    cy.get('[data-cy="signup-password"]').type("12345");
    cy.get('[data-cy="signup-confirm-password"]').type("12345");
    cy.get('[data-cy="signup-checkbox"]').check();
    cy.get('[data-cy="signup-submit"]').type("{enter}");
    cy.get('[data-cy="signup-status"]')
      .invoke("text")
      .should("eq", "phone number should be only numbers");
  });

  it("Check the checkbox", () => {
    cy.get('[data-cy="signup-first-name"]').type("John");
    cy.get('[data-cy="signup-last-name"]').type("Doe");
    cy.get('[data-cy="signup-email"]').type("user@gmail.com");
    cy.get('[data-cy="signup-phone-number"]').type("1234567893");
    cy.get('[data-cy="signup-password"]').type("12345");
    cy.get('[data-cy="signup-confirm-password"]').type("12345");
    cy.get('[data-cy="signup-submit"]').type("{enter}");
    cy.location("pathname").should("not.include", "/checkout");
  });

  it("Check encrypted password", () => {
    cy.get('[data-cy="signup-password"]')
      .type("12345")
      .invoke("attr", "type")
      .should("include", "password");
    cy.get('[data-cy="signup-confirm-password"]')
      .type("12345")
      .invoke("attr", "type")
      .should("include", "password");
  });

  it("check passwords matches", () => {
    cy.get('[data-cy="signup-password"]')
      .type("12345")
      .invoke("val")
      .should("eq", "12345");
    cy.get('[data-cy="signup-confirm-password"]')
      .type("12345")
      .invoke("val")
      .should("eq", "12345");
  });
});
