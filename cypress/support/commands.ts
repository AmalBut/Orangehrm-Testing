// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginPage } from "./pages/login-page";

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
      createUserApi<T>(
        method: string,
        url: string,
        body: object,
        headers: { [key: string]: string }
      ): Chainable<Cypress.Response<any>>;
    }
  }
}

Cypress.Commands.add("login", (username: string, password: string) => {
  loginPage.isLoaded();
  loginPage.typeUsername(username);
  loginPage.typePassword(password);
  loginPage.submit();
});

Cypress.Commands.add(
  "createUserApi",<T> (method: string, url: string, body:object, headers: { [key: string]: string }) => {
    return cy.request({
      method,
      url,
      body,
      headers,
    });
  }
);
