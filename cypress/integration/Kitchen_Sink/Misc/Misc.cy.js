/// <reference types="cypress" />

//.end()
//cy.exec()
//cy.focused()
//cy.screenshot()
//cy.wrap()

import { miscPO } from "./MiscPO.cy";

    describe('assertions', () => {
        const MiscPO = new miscPO()

    beforeEach(() => {   
        MiscPO.Navigate()
    })

    //.end()
    //requires being chained off a previous command
    //cannnot timeout
    it('should end the chain command', function() {
        //cy.end() is useful when you want to end a chain of commands
        //and force cypress to re-query from th root element
            cy.get('.misc-table').within(() =>
                //ends the current chain and yeilds null
                cy.contains('Cheryl').click().end()
            )
    })

    //*NOT WORKING*//
    //cy.exec()
    it('should execute a system command', function() {
        // cy.exec('echo Jane Lane')
        //     .its('stdout').should('contain', 'Jane Lane')
        
        // cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)

        // if (Cypress.platform === 'win32') {
        //     cy.exec('print cypress.config.js')
        //         .its('stderr').should('be empty')
        // } else {
        //     cy.exec('cat cypress.config.js')
        //         .its('stderr').should('be empty')

        //     cy.exec('pwd')
        //         .its('code').should('eq', 0)
        // }
    })

    //cy.focused()
    it('should get the DOM elemment that has focus', function() {
        cy.get('.misc-form').find('#name').click()
        cy.focused().should('have.id', 'name')

        cy.get('.misc-form').find('#description').click()
        cy.focused().should('have.id', 'description')

    })

    //**WORKING -> sends the screenshot to screenshots folder */
    //cy.screenshot()
    //it('should take a screenshot', function() {
        //cy.screenshot('my-image')
    //})

    //cy.wrap
    it('wrap the object', function() {
        cy.wrap({foo: 'bar'})
            .should('have.property', 'foo')
            .and('include', 'bar')
    })

})
