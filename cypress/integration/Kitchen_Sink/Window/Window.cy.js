/// <reference types="cypress" />

//cy.window()
//cy.document()
//cy.title()

import { windowPO } from "./WindowPO.cy";

    describe('actions', () => {
        const WindowPO = new windowPO()
    
    beforeEach(() => {   
        WindowPO.Navigate()
    })

    //get the window
    it('should get the global window object', function() {
        cy.window().should('have.property', 'top') 
    })

    //get the document
    it('should get the document object', function() {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })

    //get the title
    it('should get the title', function() {
        cy.title().should('include', 'Kitchen Sink')
    })
})