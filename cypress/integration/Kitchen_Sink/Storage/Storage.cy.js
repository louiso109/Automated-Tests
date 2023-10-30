/// <reference types="cypress" />

//cy.clearLocalStorage()
//cy.getAllLocalStorage()
//cy.clearAllLocalStorage()
//cy.getAllSessionStorage()
//cy.clearAllSessionStorage()

import { storagePO } from "./StoragePO.cy";

     describe('storage', () => {
         const StoragePO = new storagePO()

     beforeEach(() => {   
         StoragePO.Navigate() 
     })

     //clearLocalStorage()
     it('should clear all data in local storage', function() {
        cy.get('.ls-btn').click().should(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
        })

        // clearLocalStorage() yields the local storage object
        cy.clearLocalStorage().should((ls) => {
            expect(ls.getItem('prop1')).to.be.null
            expect(ls.getItem('prop2')).to.be.null
            expect(ls.getItem('prop3')).to.be.null
        })

        // Clear key matching sring in LocalStorage
        cy.get('.ls-btn').click().should(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
        })

        cy.clearLocalStorage(/prop1|2/).should((ls) => {
            expect(ls.getItem('prop1')).to.be.null
            expect(ls.getItem('prop2')).to.be.null
            expect(ls.getItem('prop3')).to.eq('magenta')
        })
    })

})