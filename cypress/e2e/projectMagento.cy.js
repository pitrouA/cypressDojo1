describe('accès au site', () => {
    beforeEach(() => {
      //cy.visit('https://magento.softwaretestingboard.com/')
      //cy.visit("https://magento.softwaretestingboard.com/men/tops-men.html")
    })

    //Scenario 3 : selected one item to cart
    it('Scenario 3 : selected one item to cart', () => {
      // 	GIVEN the user is on the "Tops" page
      cy.visit("https://magento.softwaretestingboard.com/men/tops-men.html")
      // 	WHEN the user hovers the first item named 'Breath-Easy Tank'
      cy.get('.product-items > .product-item').first().find('.product-item-info').trigger('mouseover')
      // 	AND selects a size
      cy.get('.product-items > .product-item').first().get('#option-label-size-143-item-167').click()
      // 	AND selects a color
      cy.get('.product-items > .product-item').first().get('#option-label-color-93-item-50').click()
      // 	AND clicks on the "Add to Cart" button
      cy.get('.product-items > .product-item').first().find('[type=submit]').click({ force: true, timeout: 5000 })
      // cy.wait(5000)
      // 	THEN a green banner validating the addition appears "You added Breathe-Easy Tank to your shopping cart."
      cy.get('.message-success').should('be.visible')
    })

    // Scenario 4 : display the cart and modify the quantity of products
    // it('Scenario 4 : display the cart and modify the quantity of products', () => {
    //   // 	GIVEN the user is on the cart page
    //   cy.visit("https://magento.softwaretestingboard.com/men/tops-men.html")
    //   // (fill with context)
    //   cy.get('.product-items > .product-item').first().find('.product-item-info').trigger('mouseover')
    //   cy.get('.product-items > .product-item').first().get('#option-label-size-143-item-167').click()
    //   cy.get('.product-items > .product-item').first().get('#option-label-color-93-item-50').click()
    //   cy.get('.product-items > .product-item').first().find('[type=submit]').click({ force: true, timeout: 5000 })
    //   cy.wait(5000)
    //   cy.get('.showcart').click()
    //   // 	WHEN the user clicks on the quantity
    //   // 	AND changes for another number
    //   cy.get('#cart-item-113991-qty').type(2)
    //   // 	AND clicks on the "Update" button
    //   // 	THEN the cart is update
    // })

})
