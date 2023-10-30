/// <reference types="cypress" />

//cy.clearLocalStorage()
//cy.getAllLocalStorage()
//cy.clearAllLocalStorage()
//cy.getAllSessionStorage()
//cy.clearAllSessionStorage()

import { cookiesPO } from "./CookiesPO.cy";

    describe('cookies', () => {
        const CookiesPO = new cookiesPO()

    beforeEach(() => {   
        Cypress.Cookies.debug(true)
        CookiesPO.Navigate() 

        // clear cookies again after visiting to remove
        // any 3rd party cookies picked up such as cloudflare
        cy.clearCookies()

    })

    //cy.getCookie()
    it('should get a browser cookie', function() {
        cy.get('#getCookie .set-a-cookie').click()
    
        // cy.getCookie() yields a cookie object
        cy.getCookie('token').should('have.property', 'value', '123ABC')
    })

    //cy.getCookies()
    it('should get browser cookies', function() {
        cy.getCookies().should('be.empty')

        cy.get('#getCookies .set-a-cookie').click()

        //cy.getCookies() yields an array of cookies
        cy.getCookies().should('have.length', 1).should((cookies) => {

            // each cookie has these properties
            expect(cookies[0]).to.have.property('name', 'token')
            expect(cookies[0]).to.have.property('value', '123ABC')
            expect(cookies[0]).to.have.property('httpOnly', false)
            expect(cookies[0]).to.have.property('secure', false)
            expect(cookies[0]).to.have.property('domain')
            expect(cookies[0]).to.have.property('path')
        })
    })

    //cy.setCookie()
    it('should set a browser cookie', function() {
        // https://on.cypress.io/setcookie
        cy.getCookies().should('be.empty')

        cy.setCookie('foo', 'bar')

        //cy.getCookie yields a cookie object
        cy.getCookie('foo').should('have.property', 'value', 'bar')
    })

    //cy.clearCookie()
    it('should clear a browser cookie', function() {
        // https://on.cypress.io/clearcookie
        cy.getCookie('token').should('be.null')

        cy.get('#clearCookie .set-a-cookie').click()

        cy.getCookie('token').should('have.property', 'value', '123ABC')

        //cy.clearCookies() yields null
        cy.clearCookie('token').should('be.null')
    })

    it('should clear browser cookies', function() {
        // https://on.cypress.io/clearcookies
        cy.getCookies().should('be.empty')

        cy.get('#clearCookies .set-a-cookie').click()

        cy.getCookies().should('have.length', 1)

        // cy.clearCookies yields null
        cy.clearCookies()

        cy.getCookies().should('be.empty')
    })
    
})