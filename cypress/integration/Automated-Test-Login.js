/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('.custom-logo')
})

it('negitive password test', function() {    
    cy.get('#username').type('student')
    cy.get('#password').type('test')
    cy.get('#submit').click()
    cy.get('#error').should('exist')

})

it('negitive username test', function() {
    cy.get('#username').type('test')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.get('#error').should('exist')
})

it('positive password & username test', function() {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/') // url contains the correct text => true
    cy.url().should('eq', 'https://practicetestautomation.com/logged-in-successfully/') // url is correct => true
    cy.get('.post-title').should('exist') // DOM element exists
    cy.get('strong').should('exist') // DOM element exists
    cy.get('.wp-block-button__link').should('exist') // DOM element exists
    cy.get('.wp-block-button__link').click()
})
