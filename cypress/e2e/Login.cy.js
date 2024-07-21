import { LoginPageElements } from "../../PageObjectModel/LoginPageActions/LoginPageActions";
import { ProductPageElements } from "../../PageObjectModel/ProductPageActions/ProductPageActions";

const loginPageElements = new LoginPageElements();
const productPageElements = new ProductPageElements();

describe('Login', () => {
  const baseUrl = 'https://www.saucedemo.com';

  beforeEach(() => {
    cy.visit(baseUrl);
  });


  it('should not login user with invalid credentials', () => {
    loginPageElements.username('standard_user');
    loginPageElements.userpassword('invalid_password');
    loginPageElements.clickLogin();
    loginPageElements.incorrectcredentials();
  });

  it('should login user', () => {
    loginPageElements.username('standard_user');
    loginPageElements.userpassword('secret_sauce');
    loginPageElements.clickLogin();
    loginPageElements.correctcredentials();
    
  });

  it("should land on product's page", () => {
    loginPageElements.username('standard_user');
    loginPageElements.userpassword('secret_sauce');
    loginPageElements.clickLogin();
    productPageElements.clickProduct();
    productPageElements.verifyProduct();

  });

});
