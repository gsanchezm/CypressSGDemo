Feature: Checkout Functionality
   User is able to shop and complete a checkout

   Scenario: Test login feature
   Given I visit E-Shop login Site
   When I login as following
        |Username   |Password     |
        |gsanchez   |sgv1rtual.123| 
   Then I should see my username "gsanchez"

   Scenario: Test select dress feature
   Given I navigate to main page
   When I click on "Black Cross Back Maxi Dress"
   Then I should see the product page

   Scenario: Test add to cart feature
   Given I am on product page
   When I select the product with the follow options
        |Color|Size  |Quantity|
        |Black|Medium|1       |
   And I click on ADD TO CART
   Then the cart display the correct value
