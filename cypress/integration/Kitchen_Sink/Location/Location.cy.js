/// <reference types="cypress" />

import { locationPO } from "./LocationPO.cy";

describe('location', () => {
    const LocationPO = new locationPO()
    
beforeEach(() => {   
    LocationPO.Navigate()
})

    //.cy.hash()
    it('should get the current URL hash', function() {
        cy.hash().should('be.empty')
    })

    //cy.location()
    it('should get the window location', function() {
        cy.location().should((location) => {
            expect(location.hash).to.be.empty
            expect(location.href).to.eq('https://example.cypress.io/commands/location')
            expect(location.host).to.eq('example.cypress.io')
            expect(location.hostname).to.eq('example.cypress.io')
            expect(location.origin).to.eq('https://example.cypress.io')
            expect(location.pathname).to.eq('/commands/location')
            expect(location.port).to.eq('')
            expect(location.protocol).to.eq('https:')
            expect(location.search).to.eq('')
            
    })

    //cy.url()
    it('should get the URL', function() {
        cy.url().should('eq', 'https://example.cypress.io/commands/location')
    })
})

})
