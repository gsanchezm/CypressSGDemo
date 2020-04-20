Feature: Checkout Functionality
   User is able to shop and complete a checkout

   Scenario: Test login feature
   Given I visit E-Shop login Site
   When I login as following
        |Username   |Password     |
        |gsanchez   |sgv1rtual.123| 
   Then I should see my username "gsanchez"