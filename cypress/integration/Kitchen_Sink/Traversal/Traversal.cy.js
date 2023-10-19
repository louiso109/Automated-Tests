//Best practices when using cypress to query
/// <reference types="cypress" />

import { traversalPO } from "./TraversalPO.cy";

describe('traversal', () => {
    const TraversalPO = new traversalPO()
    
beforeEach(() => {   
    TraversalPO.Navigate()
})

//.children()
//to get children of DOM elements, use the .children() command.
it('should get the children of each element within a set of DOM elements', function() {
    cy.get('.traversal-breadcrumb')
        .children('.active')
        .should('contain', 'Data')
})


//.closest()
//To get the closest ancestor DOM element, use the .closest() command.
it('should get the closeset ansestor DOM element', function () {
    cy.get('.traversal-badge')
        .closest('ul')
        .should('have.class', 'list-group')
})

//.eq()
//To get a DOM element at a specific index, use the .eq() command.
it('should select a DOM element by index from a collection', function () {
    cy.get('.traversal-list>li')
        .eq(1).should('contain', 'siamese')
})

//.filter()
//To get DOM elements that match a specific selector, use the .filter() command.
it('should filter elements with a selector.', function () {
    cy.get('.traversal-nav>li')
        .filter('.active').should('contain', 'About')

})

//.find()
//To get descendant DOM elements of the selector, use the .find() command.
it('should find descendent elements with a selector', function () {
    cy.get('.traversal-pagination')
    .find('li').find('a')
    .should('have.length', 7)
})
        
//.first()
//To get the first DOM element within elements, use the .first() command.
it('should select the first item in a collection', function () {
    cy.get('.traversal-table td')
        .first()
        .should('contain', '1')
})

//.last()
//To get the last DOM element within elements, use the .last() command.
it('should select the last item in a collection', function () {
    cy.get('.traversal-buttons .btn')
        .last() 
        .should('contain', 'Submit')
})

//.next()
//To get the next sibling DOM element within elements, use the .next() command.
it('should get the next sibling element', function () {
    cy.get('.traversal-ul')
        .contains('apples').next().should('contain', 'oranges')
})

//.nextAll()
//To get all of the next sibling DOM elements within elements, use the .nextAll() command.
it('should get all following sibling elements', function () {
    cy.get('.traversal-next-all')
        .contains('oranges')
        .nextAll().should('have.length', 3)
})


//.nextUntil()
//To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.
it('should get all following sibling elements until reaching a selector', function() {
cy.get('#veggies')
  .nextUntil('#nuts').should('have.length', 3)
})

//.not()


//.parent()


//.parents()


//.parentsUntil()


//.prev()


//.prevUntil()


//.siblings()

})