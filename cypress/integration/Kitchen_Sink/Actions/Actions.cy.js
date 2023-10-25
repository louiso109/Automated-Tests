/// <reference types="cypress" />

//.type()
//.focus()
//.blur()
//.clear
//.submit()
//.click()
//.dblclick()
//.rightclick()
//.check()
//.uncheck()
//.select()
//.scrollIntoView()
//cy.scollTo
//.trigger()

import { actionsPO } from "./ActionsPO.cy"

    describe('actions', () => {
        const ActionsPO = new actionsPO()
    
    beforeEach(() => {   
        ActionsPO.Navigate()
    })

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

    it('should check the checkbox or radio button', function () {
        cy.get('.action-checkboxes [type = "checkbox"]').not('[disabled]')
            .check().should('be.checked')

        cy.get('.action-radios [type = "radio"]').not('[disabled]')
            .check().should('be.checked')

    //checks the radio button with the value of "Radio1"
        cy.get('.action-radios [type = "radio"]')
            .check('radio1').should('be.checked')

    //accepts an array of values relateding to the names of the checkboxes
    })

    //.uncheck()
    //to uncheck a checkbox or radio, use the .uncheck() command.
    it('should by default uncheck the checkboxes in sucession one after the other', function () {
        cy.get('.action-check [type="checkbox"]')
            .not('[disabled]')
            .uncheck().should('not.be.checked')

    //.uncheck() accepts a value argument
        cy.get('.action-check [type="checkbox"]')
            .check('checkbox1')
            .uncheck('checkbox1').should('not.be.checked')
        
    //.uncheck() accepts an array of values e.g checkbox 1 and checkbox 3 can be unchecked
        cy.get('.action-check [type="checkbox"]')
            .check(['checkbox1', 'checkbox3'])
            .uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')        

    //ignore error checking prior to unchecking
        cy.get('.action-check [disabled]')
            .uncheck({ force: true }).should('not.be.checked')
    })

    //.select()
    it('should select an option', function() {
    //at first no option should be selected
        cy.get('.action-select')
            .should('have.value', '--Select a fruit--')

    //select option(s) with matching text content
        cy.get('.action-select').select('apples')
        //confirm that the apples were selected
        //note that each element starts with "fr-" in our HTML
        cy.get('.action-select').should('have.value', 'fr-apples')

        cy.get('.action-select-multiple')
            .select(['apples', 'oranges', 'bananas'])
            //when getting multiple values, invoke "val" method first
            .invoke('val')
            .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

        //select option(s) with matching value    
        cy.get('.action-select').select('fr-bananas')
            //can attach an assertion right away to the element
            .should('have.value', 'fr-bananas')


        cy.get('.action-select-multiple')
            .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
            .invoke('val')
            .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
            //assert the selected values include oranges
        cy.get('.action-select-multiple')
            .invoke('val').should('include', 'fr-oranges')
})

    //.uncheck()
    //to uncheck a checkbox or radio, use the .uncheck() command.
    it('should by default uncheck the checkboxes in sucession one after the other', function () {
        cy.get('.action-check [type="checkbox"]')
            .not('[disabled]')
            .uncheck().should('not.be.checked')

    //.uncheck() accepts a value argument
        cy.get('.action-check [type="checkbox"]')
            .check('checkbox1')
            .uncheck('checkbox1').should('not.be.checked')
        
    //.uncheck() accepts an array of values e.g checkbox 1 and checkbox 3 can be unchecked
        cy.get('.action-check [type="checkbox"]')
            .check(['checkbox1', 'checkbox3'])
            .uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')        

    //ignore error checking prior to unchecking
        cy.get('.action-check [disabled]')
            .uncheck({ force: true }).should('not.be.checked')
    })

    //.select()
    it('should select an option', function() {
    //at first no option should be selected
        cy.get('.action-select')
            .should('have.value', '--Select a fruit--')
        //select option(s) with matching text content
        cy.get('.action-select').select('apples')
        //confirm that the apples were selected
        //note that each element starts with "fr-" in our HTML
        cy.get('.action-select').should('have.value', 'fr-apples')
        cy.get('.action-select-multiple')
            .select(['apples', 'oranges', 'bananas'])
            //when getting multiple values, invoke "val" method first
            .invoke('val')
            .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
        //select option(s) with matching value    
        cy.get('.action-select').select('fr-bananas')
            //can attach an assertion right away to the element
            .should('have.value', 'fr-bananas')
        cy.get('.action-select-multiple')
            .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
            .invoke('val')
            .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
            //assert the selected values include oranges
        cy.get('.action-select-multiple')
            .invoke('val').should('include', 'fr-oranges')
    })

    //.scrollintoview()
    it('should scroll into view of the visible element on the canvas', function () {
        cy.get('#scroll-horizontal button')
            .should('not.be.visible')

        //scroll the button into view, as if the user had scrolled
        cy.get('#scroll-horizontal button').scrollIntoView()
            .should('be.visible')

        cy.get('#scroll-vertical button')
            .should('not.be.visible')

        //cypress handles the scroll direction needed
        cy.get('#scroll-vertical button').scrollIntoView()
            .should('be.visible')

        cy.get('#scroll-both button')
            .should('not.be.visible')

        //cypress knows to scroll to the right and down
        cy.get('#scroll-both button').scrollIntoView()
        .should('be.visible')
    })

    //cy.scrollTo()
    //if you chain .scrollTo() off of cy, we will
    //scroll the entire window
    it('should scroll the entire window', function () {
        cy.scrollTo('bottom')
        cy.get('#scrollable-horizontal').scrollTo('right')

        //or you can scroll to a specific coordinate:
        //(x-axis, y axis) in pixels
        cy.get('#scrollable-vertical').scrollTo(250, 250)

        //or you can scroll to a specific percentage
        //of the (width, height) of the element
        cy.get('#scrollable-both').scrollTo('75%', '25%')

        //control the easing of the scroll (default is 'swing')
        cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear'})

        //control the duration of the scroll (in ms)
        cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
        })

    //.trigger()
    it('should trigger an event on the DOM element', function () {
        cy.get('.trigger-input-range')
            .invoke('val', '50')
            .trigger('change')
            .get('input[type=range]').siblings('p')
            .should('have.text', '50')
    })
})
