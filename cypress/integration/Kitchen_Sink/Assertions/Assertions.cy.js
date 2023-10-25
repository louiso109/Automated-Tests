/// <reference types="cypress" />

//.should()
//.and()

//EXPLCIT ASSERTIONS
//expect
//assert


import { assertionsPO } from "./AssertionsPO.cy";

    describe('assertions', () => {
        const AsertionsPO = new assertionsPO()
    
    beforeEach(() => {   
        AssertionsPO.Navigate()
    })

    it('should make an assertion', function() {

    })

})
