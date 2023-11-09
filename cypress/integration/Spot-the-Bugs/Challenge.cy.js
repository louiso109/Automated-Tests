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
// 7. Unselected country printed on the form as "Select a country..."
// 8. First name is displayed as a field on the registration form
// 9. Phone number message is not displayed if all fields are left blank
// 10. Last name field is not mandatory
// 11. Email address field is not mandatory
// 12. First name printed as blank " " on the form - field should not exist
// 13. Note: All the fields marked with * are mandatory label should not be positioned under first mandatory field (which is not actually functionally mandatory)
// 14. Phone nunber label spelt incorrectly
// 15. Enter email address field label is "Enter email" instead of "Enter email address"

it('should be able to register an account', function() {
  
  ChallengePO.EnterFirstName()
  ChallengePO.MandatoryFields()
  // ChallengePO.CheckTCBox() // Bug
  ChallengePO.RegisterButton()
  ChallengePO.SuccessMessage()

  // ChallengePO.RegistrationResults() // Bug

  // ChallengePO.RegistrationResults()

})

// Phone length validation: at least 10 digits
it('should check the phone number can not be less than 10', function() {

  ChallengePO.PhoneCharacterLengthOf9Num() // should fail
  ChallengePO.PhoneCharacterLengthOf10Num() // should pass
  ChallengePO.PhoneCharacterLengthOf11Num() // should pass
})

// should verify that only digits can be added into number field
it('should verify that only digits can be entered into phone number field', function() {
  ChallengePO.MandatoryFields()
  ChallengePO.PhoneNumberDigitsChar()
  ChallengePO.PhoneNumberDigitsSpecialChar()
})

// Psw length validation: [6,20] characters
it('should check the password can not be more than 20', function() {
  ChallengePO.PasswordValidationAbove20()
})

// I agree with the terms and conditions
it('should check that the terms and conditions checkbox can be checked', function() {

  ChallengePO.MandatoryFields()  
  ChallengePO.TermsConditions()

})

// Mandatory fields marked as mandatory
// LastName
// PhoneNumber
// EmailAddress
// EnterPassword
// RegisterButton
it('Should verify that fields marked as mandatory are mandatory', function() {

  ChallengePO.MandatoryFields()
  ChallengePO.RegisterButton()
})
})


