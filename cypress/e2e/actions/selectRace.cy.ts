describe("Select a Race", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should have a Select Options with valid values", () => {
    cy.findByRole("heading", { name: "Latest Results" }).should("exist");
    const button = cy.get("#race-select").should("exist");
    button.click();
    const options = cy.findAllByRole("option");
    options
      .then((option) => {
        expect(option).to.contain("V75");
        expect(option).to.contain("V86");
        expect(option).to.contain("GS75");
      })
      .first()
      .click();
    // Wait for data to be fetched
    cy.wait(500);
    button.should("be.visible").should("have.text", "V75");
  });

  it("Should display Data", () => {
    cy.get("#race-select").should("be.visible").click();
    cy.findAllByRole("option").should("be.visible").first().click();
    cy.wait(1000);

    cy.get('[data-cy="result-tracks-header"]').should("exist").first().click();
    cy.findAllByRole("heading", { level: 6 }).should("exist"); // only place with h6 used
  });
});
