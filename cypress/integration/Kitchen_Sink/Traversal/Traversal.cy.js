//Best practices when using cypress to query
/// <reference types="cypress" />

//.children()
//.closest()
//.eq()
//.filter()
//.find()
//.first()
//.last()
//.next()
//.nextAll()
//.nextUntil()
//.not()
//.parent()
//.parents()
//.parentsUntil()
//.prev()
//.prevAll()
//.prevUntil()
//.siblings()

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
    it('should remove DOM element(s) from the set of elements', function() {
        cy.get('.traversal-disabled .btn')
            .not('[disabled]')
    })

    //.parent()
    it('should get the parent DOM element of elements', function() {
        cy.get('.traversal-mark')
            .parent().should('contain', 'Morbi leo risus')
    })

    //.parents()
    it('should get parents DOM element of elements', function() {
        cy.get('.traversal-cite')
            .parents().should('match', 'blockquote')
    })

    //.parentsUntil()
    it('should get parents of elements until other element', function() {
        cy.get('.clothes-nav')
            .find('.active')
            .parentsUntil('.clothes-nav')
            .should('have.length', 2)
    })

    //.prev()
    it('should get the prevous sibling of the DOM element within elements', function() {
        cy.get('.birds').find('.active')
            .prev().should('contain', 'Lorikeets')
    })

    //.prevAll()
    it('should get all previous DOM elements within DOM elements', function() {
        cy.get('.fruits-list').find('.third')
            .prevAll().should('have.length', 2)
    })

    //.prevUntil()
    it('should get all previous sibling DOM elements within elements until other element', function() {
        cy.get('.foods-list').find('#nuts')
            .prevUntil('#veggies').should('have.length', 3)
    })

    //.siblings()
    it('should get all sibling DOM elements of elements', function() {
        cy.get('.traversal-pills .active')
            .siblings().should('have.length', 2)
    })
})
