//Best practices when using cypress to query
/// <reference types="cypress" />

import { actionsPO } from "./ActionsPO.cy"

describe('actions', () => {
    const ActionsPO = new actionsPO()
    
beforeEach(() => {   
    ActionsPO.Navigate()
})

//.click
//.dblclick
//.rightclick
//.type
//.clear
//.check
//.uncheck
//.select()
//.trigger()
//.selectFile()

//.type()
it('should type into the DOM element', function() {
    cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
        
//.type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{del}{selectall}{backspace}')

//.type() with key modifiers
    .type('{alt}{option}') //these are equivalent
    .type('{ctrl}{control}') //these are equivalent
    .type('{meta}{command}{cmd}') //these are equivalent
    .type('{shift}')

//Delay each keypress by 0.1 seconds in the DOM element
    .type('slow.typing@email.com', {delay: 100 })
    .should('have.value', 'slow.typing@email.com')

cy.get('.action-disabled')
//Ignore error checking prior to type
//Checking whether the input field is visable or disbaled
//disabled error checking of input field
.type('disabled error checking', { force: true })
//visable error checking of input field
.should('have.value', 'disabled error checking')
})

//Focus()
it('should focus on the DOM element', function() {
    cy.get('.action-focus').focus()
        .should('have.class', 'focus')
        .prev().should('have.attr','style', 'color: orange;')
})

//.blur()
//This element must currently be in focus. If you want to ensure an element is focused before blurring, try using .focus() before .blur()
it('should blur the DOM element', function() {
    cy.get('.action-blur').type('about to blur').blur()
    .prev().should('have.attr', 'style', 'color: red;')
})

//.clear()
it('should clear the DOM element', function() {
    cy.get('.action-clear').type('Clear this text')
    .clear()
    .should('have.value', '')
})

//.submit()
it('should submit a form', function() {
    cy.get('.action-form')
        .find('[type="text"]').type('Test')
    cy.get('.action-form').submit()
        .next().should('contain', 'Your form has been submitted!')
})

//.click()
it('should click the DOM element', function() {
    cy.get('.action-btn').click()
// clicking in the center of the element is the default
    cy.get('#action-canvas').click()

//places a dot on the corrosponding position on the canvas
    cy.get('#action-canvas').click('topLeft')
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('topRight')
    cy.get('#action-canvas').click('left')
    cy.get('#action-canvas').click('right')
    cy.get('#action-canvas').click('bottomLeft')
    cy.get('#action-canvas').click('bottom')
    cy.get('#action-canvas').click('bottomRight')

//action canvas height(y) = 250px, width(x) = 250px
//.clicks an x and y coordinates

cy.get('#action-canvas')
  .click(80, 75)
  .click(170, 75)
  .click(80, 165)
  .click(100, 185)
  .click(125, 190)
  .click(150, 185)
  .click(170, 165)

//click multiple elements by passing multiple: true
cy.get('.action-labels>.label').click({ multiple: true })

//ignore error checking prior to clicking
cy.get('.action-opacity>.btn').click({ force: true })
})

//.dblclick()
it('should dblclick the DOM element', function() {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
})

//rightclick()
it('should right click the imput field to edit the DOM element', function () {
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
})

//.check()
//by default .check will check all
//checks radio buttons in succession one after the other
it.only('should check the radio or radio button', function () {
    cy.get('.action-checkboxes [type = "checkbox"]').not('[disabled]')
        .check().should('be.checked')

    cy.get('.action-radios [type = "radio"]').not('[disabled]')
        .check().should('be.checked')

//checks the radio button with the value of "Radio1"
    cy.get('.action-radios [type = "radio"]')
        .check('radio1').should('be.checked')

//accepts an array of values relateding to the names of the checkboxes
    

})



})
