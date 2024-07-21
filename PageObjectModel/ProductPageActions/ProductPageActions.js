const myElements2 = require('../../PageObjectModel/ProductPageElements/ProductPageElements.json');

export class ProductPageElements{

    clickProduct(){
        cy.get(myElements2.ProductPageLocators.img_link).click();
    }

    verifyProduct(){
        cy.get(myElements2.ProductPageLocators.product_page).should('contain.text', 'Back to products');
    }
}