export default class HomePage {

    private readonly CSS_INPUT_SEARCH = '.topStage #search'
    private readonly CSS_BUTTON_SEARCH = '.topStage .button-search'

    open(): void {
        cy.visit('/')
        cy.get('body').should('be.visible')
    }

    fillSearch(text: string): void {
        cy.get(this.CSS_INPUT_SEARCH).should('be.visible').type(text)
    }

    search(): void {
        cy.get(this.CSS_BUTTON_SEARCH).should('be.visible').click()
    }
}