/// <reference types="cypress" />

    export class challengePO {

    Navigate() {
        cy.visit('https://qa-practice.netlify.app/bugs-form');
    }

    EnterFirstName() {
        cy.get('#firstName[class=form-control][type=text][placeholder="Enter first name"]')
            .click()
            .type('First name test');
    }

    EnterLastName() {
        cy.get('#lastName[class=form-control][type=text][placeholder="Enter last name"]')
            .click()
            .type('Last name test');
    }

    EnterPhoneNumber() {
        cy.get('#phone[class=form-control][type=tel][placeholder="Enter phone number"]')
            .click()
            .type('02134567890')
            .should('have.value', '02134567890');
    }

    SelectCountry() {
        cy.get('#countries_dropdown_menu[class="browser-default custom-select"]')
        .should('be.visible')
        .select('New Zealand')
        .should('have.value', 'New Zealand');
    }

    EnterEmailAddress() {
        cy.get('#emailAddress[class=form-control][type=text][aria-describedby="emailHelp"][placeholder="Enter email"][name="emailAddress"]')
        .click()
        .type('thisisatest@test.co.nz')
        .should('have.value', 'thisisatest@test.co.nz');
    }

    EnterPassword() {
        cy.get('#password[class=form-control][type=text][placeholder="Password"][name="password"]')
            .click()
            .type('Password1')
            .should('have.value', 'Password1')
    }
    
    CheckTCBox() {
        cy.get('#exampleCheck1[class="form-check-input"][type="checkbox"]')
            // checkbox should be enabled NOT disabled
            .not('disabled')
            .check()
            .should('be.checked');
    }

    RegisterButton() {
        cy.get('#registerBtn[class="btn btn-primary"][type="submit"][onclick="registerAccount()"][ondblclick="clearResultOnDoubleClick()"]')
            .click()
    }

    SuccessMessage() {
        cy.get('#message')
    }

    RegistrationResults() {
        cy.get('#resultFn')
            .should('be.visible')
            .contains('First name test')

        cy.get('#resultLn')
            .should('be.visible')
            .contains('Last name test')

        cy.get('#resultPhone')
            .should('be.visible')        
            .contains('02134567890')

        cy.get('#country')
            .should('be.visible')
            .contains('New Zealand')

        cy.get('#resultEmail')
            .should('be.visible')
            .contains('thisisatest@test.co.nz')
    }


}