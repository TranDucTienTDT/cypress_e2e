import * as allure from "allure-js-commons";
describe('Test login feature spec', () => {
  it('Test cannot login with invalid email and password', () => {
    allure.step("Open login page", () => {
      cy.step('Open login page')
      cy.visit('/login')
    });
    allure.step("Click Login button", () => {
      cy.step('Click Login button')
      cy.get('#submitBTN').click()
    });
    allure.step("Verify the error message", () => {
      cy.step('Verify the error message')
      cy.get('div > div > p').should('have.string', 'Please check your email and password')
    });
  })
})