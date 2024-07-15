export default class CommonElements {

    private readonly CSS_BUTTON_ACCEPT_COOKIES = '#onetrust-accept-btn-handler'

    acceptCookies(): void {
        cy.get(this.CSS_BUTTON_ACCEPT_COOKIES).should('be.visible').click()
    }
}