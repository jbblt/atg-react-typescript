describe("Footer structure and content tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have a footer with ATG img", () => {
    cy.get("footer")
      .should("exist")
      .within(() => {
        cy.get("img").should("exist");
      });
  });
});
