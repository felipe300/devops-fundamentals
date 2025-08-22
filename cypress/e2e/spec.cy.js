const prodURL = Cypress.env("prodURL");
const devURL = Cypress.env("devURL");
let siteUrl = prodURL ? prodURL : devURL;

describe("template spec", () => {
  it("passes", () => {
    cy.visit(siteUrl);
  });
});

