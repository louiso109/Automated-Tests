//Best practices when using cypress to query
/// <reference types="cypress" />

import { queryingPO } from "./QueryingPO";

describe('querying', () => {
    const QueryingPO = new queryingPO()
    
beforeEach(() => {   
    QueryingPO.Navigate()
})


//cy.get()
//Can use any of the following to query the element:
it('Should query the button using the cy.get command', function () {
    //cy.get('.query-btn').should('contain', 'Button')
    //cy.get('#query-btn').should('contain', 'Button')
    cy.get('#querying .well>button:first').should('contain', 'Button')
})

//To find elements by data attribute, query using the attribute selector.
//Div with <code>data-test-id</code>
    it('Should query using the attribute selector to find elements by data attribute', function() {
    cy.get('[data-test-id="test-example"]').should('have.class', 'example')
})

//cy.get() yields a jQuery object, you can get its attribut by invoking the .attr() method.
it('Should get its attribute by invoking the .attr() method', function() {
    cy.get('[data-test-id="test-example"]')
    .invoke('attr', 'data-test-id')
    .should('equal', 'test-example')
    //or you can get an element's CSS property
    cy.get('[data-test-id="test-example"]')
    .invoke('css', 'position')
    .should('equal', 'static')
})


//cy.contains()
//find the elements by their content using cy.contains()
it('Should query the list to find the third element "bananas"', function () {
    cy.get('.query-list')    
        .contains('apples').should('have.class', 'first') //<li class="first"></li>
    cy.get('.query-list')
        .contains('oranges').should('have.class', 'second') //<li class="second"></li>
    cy.get('.query-list')
        .contains('bananas').should('have.class', 'third') //<li class="third"></li>    
    cy.get('.query-list')
        .contains('more apples').should('have.class', 'fourth') //<li class="fourth"></li> 
    })  

// we can pass a regexp to '.contains()'
it('Should pass a regexp to .contains', function() {
    cy.get('.query-list')
        .contains(/^b\w+/).should('have.class', 'third') ///^b\w+/ instead of bananas
    //cy.get('.query-list')
        //.contains('apples').should('have.class', 'first')


    // passing a selector to contains will
    cy.get('#querying')
        .contains('ul', 'oranges')
        .should('have.class', 'query-list')

// yield the selector containing the text
    cy.get('.query-button')
        .contains('Save Form')
        .should('have.class', 'btn')

})


//.within()
//find elements within a specific DOM element
    it('should find elements within a specific DOM element', function() {
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
        })
    })

    //Worst - too generic, no context
    //cy.get('button').click()
    //Bad. Coupled to styling. Highly subject to change.
    //cy.get('.btn.btn-large').click()
    //Average. Coupled to the `name` attribute which has HTML semantics.
    //cy.get('#main').click()
    // Better. But still coupled to styling or JS event listeners.
    //cy.get('[name="submission"]').click()
    //Slightly better. Uses an ID but also ensures the element
    //has an ARIA role attribute
    //cy.get('#main[role=button]').click()
    //cy.contains('Submit').click()
    // Much better. But still coupled to text content that may change.
    //cy.contains('Submit').click()

    //Best. Insulated from all changes.
    //USE THIS BY INSPECTING THE HTML ELEMENT USE DATA-CY
    //Targeting the element above by tag, class or id is very volatile and highly subject to change. 
    //You may swap out the element, you may refactor CSS and update ID's, or you may add or remove classes that affect the style of the element.
    //Instead, adding the data-cy attribute to the element gives us a targeted selector that's only used for testing.
    //The data-cy attribute will not change from CSS style or JS behavioral changes, meaning it's no coupled to the behavior or styling of an element.
    //Additionally, it makes it clear to everyone that this element is used directly by test code.
    cy.get('[data-cy="submit"]').click()

    // Worst - too generic, no context

    // Bad. Coupled to styling. Highly subject to change.

    // Average. Coupled to the `name` attribute which has HTML semantics.

    // Better. But still coupled to styling or JS event listeners.

    // Slightly better. Uses an ID but also ensures the element
    // has an ARIA role attribute

    // Much better. But still coupled to text content that may change.

    // Best. Insulated from all changes.
})