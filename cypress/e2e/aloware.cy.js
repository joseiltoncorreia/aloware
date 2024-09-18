/// <reference types="cypress" />

describe('Aloware Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq', 'Top-Rated Contact Center Software | Built For Your Favorite CRM')
  })

  it('Scenario 6: Verify navigation bar', () => {
    const menuItems = [
      'Solutions',
      'Features',
      'Pricing',
      'Compare Us',
      'Resources'
    ]

    // Validade all the menus options in the Aloware homepage
    cy.get('#header-menu').within(() => {
      menuItems.forEach(item => {
        cy.contains('a', item).should('be.visible')
      })
    })
  })

  it('Scenario 5: Verify all call to action buttons', () => {
    cy.fixture('names_and_titles.json').then((data) => {
      // Iterates over each button/title pair
      Object.entries(data).forEach(([button, title]) => {

        cy.clickButton(button, title) // Clicks on the element and validates the page title

        cy.go('back') // Returns to the home page
      })
    })
  })

  it('Scenario 8: Verify submenu opens on hover over menu item', () => {
    cy.fixture('menus_and_submenus.json').then((options) => {
      options.forEach((item) => {
        cy.goToAllSubmenus(item.menu, item.submenu, item.title)
      })
    })
  })
})