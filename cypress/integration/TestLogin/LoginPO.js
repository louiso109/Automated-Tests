/// <reference types="cypress" />

import { pageValidation } from "./Page_ValidationPO"

export class loginPage {
    
    Navigate() {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    }

    Username_Incorrect() {
        cy.get('#username').type('test')
    }

    Password_Incorrect() {
        cy.get('#password').type('test')
    }

    Username_Correct() {
        cy.get('#username').type('student')
        //cy.get('ul > :nth-child(2) > :nth-child(2)')
    }

    Password_Correct() {
        cy.get('#password').type('Password123')
        //cy.get('ul > :nth-child(2) > :nth-child(4)')
    }

    Incorrect_Username_Error() {
        cy.get('#error').should('exist')
    }

    Incorrect_Password_Error() {
        cy.get('#error').should('exist')
    }

    Sucesssful_Login_URL() {
        cy.url().should('eq', 'https://practicetestautomation.com/logged-in-successfully/') // url is correct => true
        cy.url().should('include', 'successfully/') // url contains the correct text => true
    }

    DOM_Elements_Login_Page() {
        describe('login', () => {
            const Page_Validation = new pageValidation()

        Page_Validation.Login_Page_Validation()
        
    })
    }
    
    DOM_Elements_Successful_Login () {
        describe('login', () => {
            const Page_Validation = new pageValidation()

        Page_Validation.Login_Success_Page_Validation()   

    })
}

    Submit() {
        cy.get('#submit').click()
    }

    LogOut() {
        cy.get('.wp-block-button__link').should('exist')
        cy.get('.wp-block-button__link').click()
    }
}
