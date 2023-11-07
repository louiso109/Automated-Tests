/// <reference types="cypress" />

export class challengePO2 {

    MandatoryFields() {
        
        // Last name
        cy.get('#lastName[class=form-control][type=text][placeholder="Enter last name"]')
        .click()
        .type('Last name test');

        // Phone Number
        cy.get('#phone[class=form-control][type=tel][placeholder="Enter phone number"]')
            .click()
            .type('02134567890')
            .should('have.value', '02134567890');

        // Country
        cy.get('#countries_dropdown_menu[class="browser-default custom-select"]')
            .should('be.visible')
            .select('New Zealand')
            .should('have.value', 'New Zealand');

        // Email Address
        cy.get('#emailAddress[class=form-control][type=text][aria-describedby="emailHelp"][placeholder="Enter email"][name="emailAddress"]')
            .click()
            .type('thisisatest@test.co.nz')
            .should('have.value', 'thisisatest@test.co.nz');

        // Password
        cy.get('#password[class=form-control][type=text][placeholder="Password"][name="password"]')
            .click()
            .type('Password1')
            .should('have.value', 'Password1')

    }

}