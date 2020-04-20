import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import {loginPage} from "../../pages/loginpage"
import {homePage} from "../../pages/homepage"
import {addCartPage} from "../../pages/addcartpage"

Given(`I visit E-Shop login Site`, ()=>{
    cy.visit("/my-account/")
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

Given(`I navigate to main page`,()=>{
    cy.visit("/")
    cy.url().should("include","demoqa")
})

When(`I click on {string}`,(item)=>{
    homePage.clickOnItem(item)
})

Then(`I should see the product page`,()=>{
   cy.url().should("include","/product/")
})

Given(`I am on product page`,()=>{
    cy.url().should("include","/product/")
})

When(`I select the product with the follow options`,(datatable)=>{
    datatable.hashes().forEach(row => {
        addCartPage.addItemToCart(row.Color, row.Size, row.Quantity)
    })
    
})

And(`I click on ADD TO CART`,()=>{
    addCartPage.clickOnAddToCart()
})

Then(`the cart display the correct value`,()=>{
    homePage.clickViewCart()
    cy.url().should("include","/cart/")
})

