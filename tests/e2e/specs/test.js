describe('App simple E2E test', () => {
  it('Visits the Home page', () => {
    cy.visit('/')
    cy.contains('section', 'Simple boilerplate')
  })
})
