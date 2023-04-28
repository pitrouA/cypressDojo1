describe('accès au site', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    })

    it('display the top category', () => {
      cy.get('#ui-id-4 > :nth-child(2)').trigger('mouseover');
      cy.get('#ui-id-9 > :nth-child(2)').click();

    })

})
