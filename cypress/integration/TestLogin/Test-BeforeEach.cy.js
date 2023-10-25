//<reference types = "cypress" />
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('should be able to add a new item to the list', () => {
        cy.get('#email1').click()
        .type('test.automation@email.com').should ('have.value', 'test.automation@email.com')
    })