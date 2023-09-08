///<reference types="cypress" />
    
export class pageValidation {

Login_Page_Validation() {
    cy.get('.custom-logo').should('exist')
    cy.get('#menu-item-43 > a').should('exist')
    cy.get('#menu-item-20 > a').should('exist')
    cy.get('#menu-item-21 > a').should('exist')
    cy.get('#menu-item-19 > a').should('exist')
    cy.get('#menu-item-18 > a').should('exist')

    cy.get('h2').should('exist')
    cy.get('#login > ul > :nth-child(1)').should('exist')
    cy.get('#login > ul > :nth-child(2)').should('exist')
    cy.get('ul > :nth-child(2) > :nth-child(2)').should('exist')
    cy.get('ul > :nth-child(2) > :nth-child(4)').should('exist')

    cy.get('#form > :nth-child(1)').should('exist')
    cy.get('#form > :nth-child(2)').should('exist')

    cy.get('#submit').should('exist')
    }

Login_Success_Page_Validation() {
    cy.get('.custom-logo').should('exist')
    cy.get('#menu-item-43 > a').should('exist')
    cy.get('#menu-item-20 > a').should('exist')
    cy.get('#menu-item-21 > a').should('exist')
    cy.get('#menu-item-19 > a').should('exist')
    cy.get('#menu-item-18 > a').should('exist')

    cy.get('.post-title').should('exist')
    cy.get('strong').should('exist')
    cy.get('.wp-block-button__link').should('exist')

    }
}
