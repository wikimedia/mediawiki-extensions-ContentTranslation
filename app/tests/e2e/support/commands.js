Cypress.Commands.add("login", (usename, password) => {
  cy.visit("wiki/Special:ContentTranslation");
  cy.contains("h1", "Translate page");
  cy.get(".mw-body-content a.external").click();
  cy.get("form").within(() => {
    cy.get("input[name=wpName]").type(usename);
    cy.get("input[name=wpPassword]").type(password);
    cy.get("button[type=submit]").click();
  });
});
