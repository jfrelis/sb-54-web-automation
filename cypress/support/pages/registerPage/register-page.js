const locator = require('../../locators/register-page-locators')

class registerPage {

    async fillUsername(randomUser) {
        cy.xpath(locator.datatestid.username_input)
            .type(randomUser, {force: true})
            .should('have.value', randomUser)
    }

    async fillPassword() {
        cy.xpath(locator.datatestid.password_input)
            .type('password', {force: true})
            .should('have.value', 'password', {timeout: 2000})
    }

    async clickSignUpBtn() {
        cy.xpath(locator.datatestid.signup_button)
            .click()
        
        cy.wait(10000)
    }

}

module.exports = new registerPage();
