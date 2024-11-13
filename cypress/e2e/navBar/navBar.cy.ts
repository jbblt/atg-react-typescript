describe("NavBar structure and content tests", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
    cy.visit("http://localhost:3000");
  });

  it("should have a header with the menu button", () => {
    cy.get("header")
      .first()
      .should("exist")
      .within(() => {
        cy.get('button[aria-label="menu"]').should("exist");
      });
  });
});
