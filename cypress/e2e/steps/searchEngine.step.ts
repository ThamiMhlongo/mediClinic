import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import CommonElements from '../pages/CommonElements'

Given('I go to the Hirslanden page', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      
    this.home_page = new HomePage()
    this.home_page.open()
})

Given('I accept the cookies', function () {
    this.common_elements = new CommonElements()
    this.common_elements.acceptCookies()
})

Given('I fill the search input with the {string} term on the Search Engine page', function (text: string) {
    this.home_page.fillSearch(text)
})

When('I click on the search button on the Search Engine page', function () {
    this.home_page.search()
})

Then('the text {string} should be visible on the result page on the Search Engine page', function (text: string) {
    this.search_page = new SearchPage()
    this.search_page.resultContain((elemText: string) => {
        expect(elemText).contains(text)
    })
})