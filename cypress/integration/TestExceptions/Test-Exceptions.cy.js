/// <reference types="cypress" />

import { loginPage } from "../TestLogin/LoginPO";
import { exceptionsPage } from "./ExceptionsPO.cy";

    describe('exceptions', () => {
        const ExceptionsPage = new exceptionsPage()

    beforeEach(() => {
        ExceptionsPage.Navigate()
    })   

    it('Saving an item to the list', function() {
        ExceptionsPage.Save_Item()
    })

    it('Editing an item in the list', function() {
        ExceptionsPage.Edit_Item()
    })

    it('Adding item to the list', function() {
        ExceptionsPage.Add_Item()
    })

    it('Removing item from the list', function(){
        ExceptionsPage.Remove_Item
    })
})