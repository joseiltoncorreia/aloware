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
Cypress.Commands.add('clickButton', (buttonLabel, urlTitle) => {
    cy.contains('a', buttonLabel).click()
    cy.title().should('eq', urlTitle)
    cy.screenshot(`Call to Action - ${buttonLabel}`)
})

Cypress.Commands.add('goToAllSubmenus', (menubar, subMenuBar, urlTitle) => {
    cy.get(`#header-menu a:contains(${menubar})`).realHover()
    cy.contains('a', subMenuBar).click()
    cy.title().should('eq', urlTitle)
    cy.screenshot(`Submenu Page - ${subMenuBar}`)
})