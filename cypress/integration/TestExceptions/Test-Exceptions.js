/// <reference types="cypress" />

import { loginPage } from "../TestLogin/LoginPO";
import { exceptionsPage } from "./ExceptionsPO";

describe('exceptions', () => {
    const ExceptionsPage = new exceptionsPage()

// Test case 1 no such element exception

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

// Test case 2 element not able to be interacted with

// Test case 3 invalid element state exception

// Test case 4 stle element reference exception

// Test case 5 timeout exception
})