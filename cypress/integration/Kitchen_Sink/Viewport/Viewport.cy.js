/// <reference types="cypress" />

//cy.viewport()

import { viewportPO } from "./ViewportPO.cy";

    describe('viewport', () => {
        const ViewportPO = new viewportPO()
    
    beforeEach(() => {   
        ViewportPO.Navigate()
    })

    //change the size and dimension of the viewport

    it('should change the size and dimension of the viewport', function() {
        cy.get('#navbar').should('be.visible')
        cy.viewport(320, 480)
   

    //the navbar should have collapsed since our screen is smaller
    
        cy.get('#navbar').should('not.be.visible')
        cy.get('.navbar-toggle').should('be.visible').click()
        cy.get('.nav').find('a').should('be.visible')

    })
    
    //See what the web app looks like on a large screen
    it('should see what the viewport looks like on a large screen', function() {
        cy.viewport(2999, 2999)
    })
        
    //cy.viewport() accepts a set of preset sizes
    //to easily set the screen to a device's width and height
    it('should how the viewport on preset sizes', function() {
        cy.viewport('macbook-15')
        //added a cy.wait(200) otherwise it will be to fast to see in the viewer
        cy.wait(200)
        cy.viewport('macbook-13')
        cy.wait(200)
        cy.viewport('macbook-11')
        cy.wait(200)
        cy.viewport('ipad-2')
        cy.wait(200)
        cy.viewport('ipad-mini')
        cy.wait(200)
        cy.viewport('iphone-6+')
        cy.wait(200)
        cy.viewport('iphone-6')
        cy.wait(200)
        cy.viewport('iphone-5')
        cy.wait(200)
        cy.viewport('iphone-4')
        cy.wait(200)
        cy.viewport('iphone-3')
        cy.wait(200)
    })

    //the default page orientation is landscape
    it('should display the orientation in portait and landscape', function() {
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
        cy.viewport('iphone-4', 'landscape')
        cy.wait(200)
    })

    //the viewport will be rest back to default inbetween tests to the default dimensions
    //this can be changes in cypress.config.js

})


