describe("CX Dashboard", () => {
  before(() => cy.login("cypress", "cypresspassword"));
  it("CX Dashboard", () => {
    cy.visit("wiki/Special:ContentTranslation");
    cy.get("#cxdashboard");
  });
});
