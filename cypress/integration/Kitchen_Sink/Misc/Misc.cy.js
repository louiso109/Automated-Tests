/// <reference types="cypress" />

//.end()
//cy.exec()
//cy.focused()
//cy.screenshot()
//cy.wrap()


import { miscPO } from "./MiscPO.cy";

    describe('assertions', () => {
        const MiscPO = new miscPO()

    beforeEach(() => {   
        MiscPO.Navigate()
    })

    //.end()
    //requires being chained off a previous command
    //cannnot timeout
    it('should end the chain command', function() {
        //cy.end() is useful when you want to end a chain of commands
        //and force cypress to re-query from th root element
            cy.get('.misc-table').within(() =>
                //ends the current chain and yeilds null
                cy.contains('Cheryl').click().end()
            )
    })

})
