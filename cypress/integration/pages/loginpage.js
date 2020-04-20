/// <reference types="cypress" />

export class LoginPage{
    performLogin(username,password){
        cy.get("#username").type(username)
        cy.get("#password").type(password)
    }

    clickLoginButton(){
        cy.xpath("//button[@name='login']").click()
    }
}

export const loginPage = new LoginPage();

