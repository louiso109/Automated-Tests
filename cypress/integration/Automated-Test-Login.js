/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})

it('test invalid password', () => {    
    cy.get('#username').type('student')
    cy.get('#password').type('test')
    cy.get('#submit').click()

})

it('test valid username', () => {
    cy.get('#username').type('test')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
})

it('test valid password', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
})
