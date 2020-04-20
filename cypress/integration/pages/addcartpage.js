export class AddCartPage{
    addItemToCart(color, size, quantity){
        cy.get('#pa_color').select(color)
        cy.get('#pa_size').select(size)
        cy.xpath("//input[@title='Qty']").clear()
        cy.xpath("//input[@title='Qty']").type(quantity)
    }

    clickOnAddToCart(){
        cy.xpath("//button[contains(@class,'add_to_cart')]").click()
    }
}

export const addCartPage = new AddCartPage()