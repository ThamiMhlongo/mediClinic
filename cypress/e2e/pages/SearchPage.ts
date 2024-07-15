export default class SearchPage {
    private readonly CSS_RESULT_SEARCH = 'section.search-results'

    resultContain(callback: (text: string) => void): void {
        cy.get(this.CSS_RESULT_SEARCH, { timeout: 20000 }).then(($elem) => {
            callback($elem.text())
        })
    }
}