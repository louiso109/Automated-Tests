export class loginPage {
    
    Navigate() {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    }

    Username_Incorrect(){
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
        cy.get('#site-header').should('exist')
        cy.get('#max-width').should('exist')
        cy.get('.custom-logo').should('exist')
        cy.get('#mobile-menu-container').should('exist')
        cy.get('#menu-primary-items').should('exist')
        cy.get('#menu-item-43 > a').should('exist')
        cy.get('#menu-item-20 > a').should('exist')
        cy.get('#menu-item-21 > a').should('exist')
        cy.get('#menu-item-19 > a').should('exist')
        cy.get('#menu-item-18 > a').should('exist')
        cy.get('#main-container').should('exist')

        cy.get('#login').should('exist')
        cy.get('h2').should('exist')
        cy.get('#login > ul').should('exist')
        cy.get('#login > ul > :nth-child(1)').should('exist')
        cy.get('#login > ul > :nth-child(2)').should('exist')
        cy.get('ul > :nth-child(2) > :nth-child(2)').should('exist')
        cy.get('ul > :nth-child(2) > :nth-child(4)').should('exist')

        cy.get('#form').should('exist').should('exist')
        cy.get('#form > :nth-child(1)').should('exist')
        cy.get(':nth-child(1) > label').should('exist')
        cy.get('#username').should('exist')

        cy.get('#form > :nth-child(2)').should('exist')
        cy.get(':nth-child(2) > label').should('exist')
        cy.get('#password').should('exist')

        cy.get('#submit').should('exist')

        cy.get('#error').should('exist')
        cy.get('#login > :nth-child(5)').should('exist')

    }

    DOM_Elements_Successful_Login () {
        cy.get('.post-title').should('exist') // DOM element exists
        cy.get('strong').should('exist') // DOM element exists   
    }

    Submit() {
        cy.get('#submit').click()
    }

    LogOut() {
        cy.get('.wp-block-button__link').should('exist')
        cy.get('.wp-block-button__link').click()
    }
}