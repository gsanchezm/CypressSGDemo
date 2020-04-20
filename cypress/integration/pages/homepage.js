export class HomePage{

    clickOnItem(item){
        if(item === "Black Cross Back Maxi Dress"){
            cy.get('.post-1162 > .noo-product-inner > h3 > a').click()
        }
    }

    clickViewCart(){
        cy.xpath("//a[contains(text(),'View cart')]").click()
    }
}

export const homePage = new HomePage()