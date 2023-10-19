//Best practices when using cypress to query
/// <reference types="cypress" />

import { queryingPO } from "./QueryingPO.cy"

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

//cy.root()

//Best Practices: Selecting Elements

//Best practices for querying to select elements
//from worst approah to best approach


})
