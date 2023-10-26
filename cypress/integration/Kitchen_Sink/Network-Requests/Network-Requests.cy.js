/// <reference types="cypress" />

//cy.request()
//cy.intercept()

import { network_requestsPO } from "./Network-RequestsPO.cy"; 

     describe('network', () => {
         const NetworkPO = new networkPO()

     beforeEach(() => {   
         NetworkPO.Navigate()
     })

     it('should make an XHR request', function() {
        cy.request('https://jsonplaceholder.cypress.io/comments')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.length(500)
                expect(response).to.have.property('headers')
                expect(response.status).to.have.property('duration')
     })

    })
})