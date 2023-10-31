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
// 1. Terms and conditions checkbox is diabled when it should be enabled.
// 2. Results last name printout does not match what was entered into the input field.

it('should be able to register an account', function () {
  
  ChallengePO.EnterFirstName()
  ChallengePO.EnterLastName()
  ChallengePO.EnterPhoneNumber()
  ChallengePO.SelectCountry()
  ChallengePO.EnterEmailAddress()
  ChallengePO.EnterPassword()
  // ChallengePO.CheckTCBox()
  ChallengePO.RegisterButton()
  ChallengePO.SuccessMessage()
  ChallengePO.RegistrationResults()
  
})

})