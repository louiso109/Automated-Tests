/// <reference types="cypress" />

import { loginPage } from "./LoginPO.cy"

describe('login', () => {
    const LoginPage = new loginPage()

beforeEach(() => {
    LoginPage.Navigate()
    LoginPage.DOM_Elements_Login_Page()
})

it('Incorrect username test', function() {
    LoginPage.Username_Incorrect()
    LoginPage.Submit()
    LoginPage.Incorrect_Password_Error()
})


it('Inccorrect password test', function() {    
    LoginPage.Password_Incorrect()
    LoginPage.Submit()
    LoginPage.Incorrect_Username_Error()

})

it('Correct password & correct username test', function() {
    LoginPage.Username_Correct()
    LoginPage.Password_Correct()
    LoginPage.Submit()
    LoginPage.Sucesssful_Login_URL()
    LoginPage.DOM_Elements_Successful_Login()
    
})

it('Should log out', function() {  
    LoginPage.Username_Correct()
    LoginPage.Password_Correct()
    LoginPage.Submit()
    LoginPage.Sucesssful_Login_URL()
    LoginPage.LogOut()
})
})

