/// <reference types="cypress" />

//cy.fixture()
//cy.require() - **NOT WORKING**
//cy.readFile() - **NOT WORKING**
//cy.writeFile() - **NOT WORKING**


import { filesPO } from "./FilesPO.cy";

    describe('files', () => {
        const FilesPO = new filesPO()

    beforeEach(() => {   
        FilesPO.Navigate() 
    })

    it('should load a fixture', function() {
        // Instead of writing a response inline you can
        // use a fixture file's content

        // when application makes an Ajax request matching "GET **/comments/*"
        // Cypress will intercept it and reply with the object in 'example.json' fixture
        cy.intercept('GET', '**/comments/*', { fixture: 'example.json' 
            }).as('getComment')
        // we have code that get a comment when
        // the button is clciked in scripts.js
        cy.get('.fixture-btn').click()

        cy.wait('@getComment').its('response.body')
            .should('have.property', 'name')
            .and('include', 'Using fixtures to represent data')

    })

    it('should read file contents', () => {
        // https://on.cypress.io/readfile
    
        // You can read a file and yield its contents
        // The filePath is relative to your project's root.
        cy.readFile('cypress.json').then((json) => {
          expect(json).to.be.an('object')
        })
      })
    
      it('should write to a file', () => {
        // https://on.cypress.io/writefile
    
        // You can write to a file
    
        // Use a response from a request to automatically
        // generate a fixture file for use later
        cy.request('https://jsonplaceholder.cypress.io/users')
          .then((response) => {
            cy.writeFile('cypress/fixtures/users.json', response.body)
          })
    
        cy.fixture('users').should((users) => {
          expect(users[0].name).to.exist
        })
    
        // JavaScript arrays and objects are stringified
        // and formatted into text.
        cy.writeFile('cypress/fixtures/profile.json', {
          id: 8739,
          name: 'Jane',
          email: 'jane@example.com',
        })
    
        cy.fixture('profile').should((profile) => {
          expect(profile.name).to.eq('Jane')
    })

})

})