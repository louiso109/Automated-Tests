/// <reference types="cypress" />

export class exceptionsPage {

    Navigate() {
        cy.visit('https://practicetestautomation.com/practice-test-exceptions/')
    }

    Save_Item() {
        cy.get('#edit_btn').click()
        cy.get('#save_btn').click()
        cy.get('#confirmation').should('exist')
    }   

    Edit_Item() {
        cy.get('#edit_btn').click()
        cy.get('.input-field').clear().type('Banana{enter}')
        cy.get('.input-field').should('have.value', 'Banana')
        cy.get('.input-field').click()
        cy.get('#confirmation').should('exist')
    }

    Add_Item() {
        cy.get('#add_btn').click()
    }

    Remove_Item() {
        cy.get('#add_btn').click()
        cy.get('#remove_btn').click()
        cy.get('#confirmation').should('exist')
    }

}
