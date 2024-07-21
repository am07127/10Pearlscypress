const myElements = require('../../PageObjectModel/LoginPageElements/LoginPageElements.json');

export class LoginPageElements{

    username(username) {
        cy.get(myElements.LoginPageLocators.user_name).type(username);
    }

    userpassword(password) {
        cy.get(myElements.LoginPageLocators.password_text).type(password);
    }

    clickLogin() {
        cy.get(myElements.LoginPageLocators.login_button).click();
    }

    correctcredentials(){
        cy.get(myElements.LoginPageLocators.header_text).should('contain.text', 'Products');
    }

    incorrectcredentials(){
        cy.get(myElements.LoginPageLocators.error_message).should('contain.text', 'Epic sadface');
    }
}