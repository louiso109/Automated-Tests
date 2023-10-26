/// <reference types="cypress" />

// .each()
// .its()
// .invoke()
// .spread()
// .then() - **NOT COMPLETED**

import { connectorsPO } from "./ConnectorsPO.cy";

    describe('assertions', () => {
        const ConnectorsPO = new connectorsPO()

    beforeEach(() => {   
        ConnectorsPO.Navigate()
    })

    //.each()
    // iterate through an array like a structure
    it('should iterate over the elements of the current subject', function() {
        cy.get('.connectors-each-ul>li')
            .each(function($el, index, $list) {
                console.log($el, index, $list)
        })
    })

    //.its()
    it('should get the properties of the current subject', function() {
        cy.get('.connectors-its-ul>li')
            //calls the 'length' property returning that value
            .its('length')
            .should('be.gt', 2)
    })

    //.invoke()
    //shows the hidden div "this is a div"    
    it('should invoke a function on a current subject', function() {
        cy.get('.connectors-div').should('be.hidden')
            // call the jquery method show on the 'div container'
            .invoke('show')
            .should('be.visible')
    })

    //.spread()
    it('spread an array as individual arguments to a callback function', function() {
        const arr = ['foo', 'bar', 'baz']

        cy.wrap(arr).spread(function(foo, bar, baz){
            expect(foo).to.eq('foo')
            expect(bar).to.eq('bar')
            expect(baz).to.eq('baz')
    })
    
    })

})
