describe('accès au site', () => {
    before(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('connexion', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('jane')
        cy.get('[data-test="lastName"]').type('dark')
        cy.get('[data-test="postalCode"]').type('56000')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.screenshot()
    })
  
  })