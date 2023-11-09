/// <reference types="cypress" />

import { challengePO2 } from "./ChallengePO2.cy";

    export class challengePO {

        Navigate() {
            cy.visit('https://qa-practice.netlify.app/bugs-form');

            cy.url('https://qa-practice.netlify.app/bugs-form')
        }

        EnterFirstName() {
            cy.get('#firstName[class=form-control][type=text][placeholder="Enter first name"]')
                .click()
                .type('First name test');
    }

        CheckTCBox() {
            cy.get('#exampleCheck1[class="form-check-input"][type="checkbox"]')
                // checkbox should be enabled NOT disabled
                .not('disabled')
                .check()
                .should('be.checked');
        }

        RegisterButton() {
            cy.get('#registerBtn[class="btn btn-primary"][type="submit"][onclick="registerAccount()"][ondblclick="clearResultOnDoubleClick()"]')
                .click()
        }

        SuccessMessage() {
            cy.get('#message') //more detail
        }

        PasswordFailureMessage() {
            cy.get('#message[class="alert alert-danger"][role="alert"]')
                // .contains('Successfully registered the following information')
                // .should('have.class', 'alert')
        }

        PhoneNumberFailureMessage() {

        }

        RegistrationResults() {
            cy.get('#resultFn')
                .should('be.visible')
                .contains('First name test')

        cy.get('#resultLn')
            .should('be.visible')
            .contains('Last name test')

        cy.get('#resultPhone')
            .should('be.visible')        
            .contains('02134567890')

        cy.get('#country')
            .should('be.visible')
            .contains('New Zealand')

        cy.get('#resultEmail')
            .should('be.visible')
            .contains('thisisatest@test.co.nz')
    }

    CheckSpellingOfFieldLabels() {
        
    }

    PhoneCharacterLengthOf9Num() {
        cy.get('#phone')
            .clear()
            .type('123456789').invoke('val')
            .then(val=>{    
            const myVal = val;      
            expect(myVal).to.equal('123456789');
            })
    }
    
    PhoneCharacterLengthOf10Num() {
        cy.get('#phone')
            .clear()
            .type('1234567890').invoke('val')
            .then(val=>{    
            const myVal = val;      
            expect(myVal).to.equal('1234567890');
            })
    }

    PhoneCharacterLengthOf11Num() {
        cy.get('#phone')
            .clear()
            .type('12345678901').invoke('val')
            .then(val=>{    
            const myVal = val;      
            expect(myVal).to.equal('12345678901');
            })
    }

    PasswordValidationEqual6() {
        cy.get('#password')
            .clear()
            .type('123456').invoke('val')
            .then(val=>{    
            const myVal = val;      
            expect(myVal).to.equal('123456');
            })
    }

    PasswordValidationBelow6() {
        cy.get('#password')
            .clear()
            .type('12345').invoke('val')
            .then(val=>{    
            const myVal = val;      
            expect(myVal).to.equal('12345');
            })
    }

    PasswordValidationEqual20() {
        cy.get('#password')
            .clear()
            .type('12345678901234567890').invoke('val')
            .then(val=>{    
            const myVal = val;      
            expect(myVal).to.equal('12345678901234567890');
            }) // 20
    }

    PasswordValidationAbove20() {
        cy.get('#password')
            .clear()
            .type('123456789012345678901').invoke('val')
            .then(val=>{    
            const myVal = val;      
            expect(myVal).to.equal('123456789012345678901');
            })  // 21
    }
 
    TermsConditions() {
        cy.get('#exampleCheck1[class=form-check-input][type=checkbox]')
            .not('[disabled')
            .should('be.checked')
    }

    PhoneNumberDigitsChar() {
        cy.get('#phone[class=form-control][type=tel][placeholder="Enter phone number"]')
            .clear()
            .type('qwertyuio').invoke('val')
            .then(val=>{    
            const myVal = val;      
            expect(myVal).to.equal('qwertyuio'); 
            }) // 9 alphanumeric char
        }

    PhoneNumberDigitsSpecialChar() {
        cy.get('#phone[class=form-control][type=tel][placeholder="Enter phone number"]')
            .clear()
            .type('!@#$%^&*').invoke('val')
            .then(val=>{    
            const myVal = val;      
            expect(myVal).to.equal('!@#$%^&*'); 
            }) // 9 special char
        }

    MandatoryFields() {
        describe('challenge2', () => {
            const ChallengePO2 = new challengePO2()

            ChallengePO2.MandatoryFields()

    })

    }
    }