/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

import { challengePO } from "./ChallengePO.cy"

describe('challenge', () => {
    const ChallengePO = new challengePO()

beforeEach(() => {
ChallengePO.Navigate()

})   

///Challenge spot all 15 bugs on this page

it('should enter in a first name', function () {
    
})

it('should enter in a last name', function() {

})

it('should enter in a phone number', function() {

})

it('should select a country', function() {

})

it('should enter in an email address', function() {

})

it('should enter in a password', function() {

})

})