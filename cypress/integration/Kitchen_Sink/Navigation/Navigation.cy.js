/// <reference types="cypress" />

//cy.go()
//cy.reload()
//cy.visit()

import { navigationPO } from "./NavigationPO.cy";

    describe('navigation', () => {
        const NavigationPO = new navigationPO()
    
    beforeEach(() => {   
        NavigationPO.Navigate()
    })

    //cy.go()
    it('should go back or forward in the browser history', function() {
        cy.location('pathname').should('include', 'navigation')

        cy.go('back')
        cy.location('pathname').should('not.include', 'navigation')

        cy.go('forward')
        cy.location('pathname').should('include', 'navigation')

        //clicking back
        cy.go(-1)
        cy.location('pathname').should('not.include', 'navigation')

        //clicking forward
        cy.go(1)
        cy.location('pathname').should('include', 'navigation')
    })

    //cy.reload()
    it('should reload the page', function() {
        cy.reload()
        //reload the page without using the cache
        cy.reload(true)
    })

    //cy.visit()
    it('should visit a remote page', function() {
        cy.visit('https://example.cypress.io/commands/navigation', {
            timeout: 5000, //increase total time for the visit to resolve
            onBeforeLoad: function(contentWindow) {
                //contentWindow is remote page's window object
            },
            onLoad: function(contentWindow) {
                //contentWindow is the remote page's window object
            }
        })
    })

})
