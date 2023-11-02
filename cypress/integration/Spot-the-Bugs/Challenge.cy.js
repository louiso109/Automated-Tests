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

// Challenge spot all 15 bugs on this page
// 1. Terms and conditions checkbox is diabled when it should be enabled.
// 2. Results last name printout does not match what was entered into the input field.
// 3. Password box accepts less than 6 characters
// 4. Password box accepts more than 20 characters
// 5. Phone number box accepts alphabetic characters
// 6. Select country is a mandatory field but not marked (*) as one
// 7. country is shown as select a country
// 8. First name is displayed as a field on the registration form

it('should be able to register an account', function() {
  
  ChallengePO.EnterFirstName()
  ChallengePO.EnterLastName()
  ChallengePO.EnterPhoneNumber()
  ChallengePO.SelectCountry()
  ChallengePO.EnterEmailAddress()
  ChallengePO.EnterPassword()
  // ChallengePO.CheckTCBox()
  ChallengePO.RegisterButton()
  ChallengePO.SuccessMessage()

  // ChallengePO.RegistrationResults()
  
})

// Phone length validation: at least 10 digits
it('should check the phone number can not be less than 10', function() {
  ChallengePO.PhoneCharacterLengthOf9() // should fail
  ChallengePO.PhoneCharacterLengthOf10() // should pass
  ChallengePO.PhoneCharacterLengthOf11() // should pass
})

// Psw length validation: [6,20] characters
it('should check the password can not be more than 20', function() {
  ChallengePO.PasswordValidationAbove()
})

// I agree with the terms and conditions
it('should check that the terms and conditions checkbox can be checked', function() {

})

// should verify that only digits can be added into number field
it('should verify that only digits can be entered into phone number field', function() {

})

// Mandatory fields marked as mandatory
// LastName
// PhoneNumber
// EmailAddress
// EnterPassword
// RegisterButton
it('Should verify that fields marked as mandatory are mandatory', function() {
  ChallengePO.EnterLastName()
  ChallengePO.EnterPhoneNumber()
  ChallengePO.EnterEmailAddress()
  ChallengePO.EnterPassword()
  ChallengePO.RegisterButton()

})


})


