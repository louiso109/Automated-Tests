/// <reference types="cypress" />

//IMPLICIT ASSERTIONS:
//.should()
//.and()

//EXPLCIT ASSERTIONS:
//expect
//assert


import { assertionsPO } from "./AssertionsPO.cy";

    describe('assertions', () => {
        const AsertionsPO = new assertionsPO()
    
    beforeEach(() => {   
        AssertionsPO.Navigate()
    })

    //.should() - an alias of .and()
    it('should make an assertion', function() {
        cy.get('.assertion-table')
            .find('tbody tr:last').should('have.class', 'success')
            .find('td')
            .first()
            //checking the text of the element in varous ways
            .should('have.text', 'Column content')
            .should('contain', 'Column content')
            .should('have.html','Column content')
            //chai-jquery uses "is()" to check if element matches selector
            .should('match','td')
            //to match text content against a regular expression
            //first need to invoke jQuery method text()
            //and then match using regular expression
            .invoke('text')
            .should('match', /column content/i)

        //a better way to check the element's text content against a regular expression
        //is to use "cy.contains"
        //https://on.cypress.io/contains

        cy.get('.assertion-table')
            .find('tbody tr:last')
            //finds first element with text content matching regular expression
            .contains('td', /column content/i)
            .should('be.visible')
    })

    //.and()
    it('should chain multiple assertions together', function() {
        cy.get('.assertions-link')
            .and('have.attr', 'href')
            .and('include', 'cypress.io')
    })

})
