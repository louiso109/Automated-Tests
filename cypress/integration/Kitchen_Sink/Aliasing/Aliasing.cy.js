/// <reference types="cypress" />

//.as

import { aliasingPO } from "./AliasingPO.cy";

    describe('aliasing', () => {
        const AliasingPO = new aliasingPO()

    beforeEach(() => {   
        AliasingPO.Navigate()
    })

    it('should alias a route to the DOM element', function() {
        // the following DOM command chain is unwieldy
        // to avoid repeating it, use .as()
        cy.get('.as-table')
            .find('tbody>tr').first()
            .find('td').first()
            .find('button').as('firstBtn')

        // to reference the created alias
        // @ in front of it's name
        cy.get('@firstBtn').click()

        cy.get('@firstBtn')
            .should('have.class', 'btn-success')
            .and('contain', 'Changed')

        //Alias the route to wait for its response
        cy.intercept('GET', '**/comments/**').as('getComment')

        // we have code that gets a comment when
        // the button is clicked in scripts.js

        cy.get('.network-btn').click()

        //https://on.cypress.io/wait
        cy.wait('@getComment').its('response.statusCode')
        .should('eq', 304)

    })

})