/// <reference types="cypress" />

    export class queryingPO {
    
    Navigate() {
        cy.visit('https://example.cypress.io/commands/querying')
    }

    QueryList() {
        cy.get('.query-list')
    }
}
