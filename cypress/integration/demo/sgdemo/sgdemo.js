import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import {loginPage} from "../../pages/loginpage"

Given(`I visit E-Shop login Site`, ()=>{
    cy.visit("https://shop.demoqa.com/my-account/")
    cy.url().should("include","/my-account/")
})

When(`I login as following`, (datatable)=>{
    datatable.hashes().forEach(row => {
        loginPage.performLogin(row.Username, row.Password)
    })
    loginPage.clickLoginButton()
})

Then(`I should see my username {string}`, (username) =>{
    cy.contains(username) //
})