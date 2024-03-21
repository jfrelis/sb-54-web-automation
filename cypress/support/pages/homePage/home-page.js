const locator = require('../../locators/home-page-locators')

class homePage {

    async goHomepage() {
        cy.visit('https://www.demoblaze.com/')
    }

    async clickSignUpMenu() {
        cy.xpath(locator.datatestid.signup_menu).click()
        cy.xpath(locator.datatestid.signup_modal).should('exist', {timeout: 2000})
    }

    async clickSignInMenu() {
        cy.xpath(locator.datatestid.signin_menu).click({timeout: 2000})
    }

    async verifyUsernameExist(randomUser) {
        cy.xpath(locator.datatestid.username_text).should('contain', randomUser, {timeout: 2000})
    }

}

module.exports = new homePage()
