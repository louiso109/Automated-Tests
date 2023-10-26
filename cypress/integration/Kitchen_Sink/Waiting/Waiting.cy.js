/// <reference types="cypress" />

//cy.wait()

import { waitingPO } from "./WaitingPO.cy";

     describe('waiting', () => {
         const WaitingPO = new waitingPO()

     beforeEach(() => {   
         WaitingPO.Navigate()
     })

     it('should wait a specific amount of time or resource to resolve', function() {
        cy.get('.wait-input1').type('Wait 1000ms after typing')
        cy.wait(1000)
        cy.get('.wait-input2').type('Wait 2000ms after typing')
        cy.wait(2000)
        cy.get('.wait-input3').type('Wait 3000ms after typing')
        cy.wait(3000)

        // Listen to get to comments/1
        cy.intercept('GET', '**/comments/*').as('getComment')

        //we have code that gets the comment when
        // the button is clicked in scripts.js
        cy.get('.network-btn').click()

        cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
     })

})
