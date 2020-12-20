describe('App simple E2E test', () => {
  it('Visits the Home page', () => {
    cy.visit('/')
    cy.contains('h1', 'Desafio de Frontend')
  })

  it('Visits the New Product page', () => {
    cy.visit('/product/new')
    cy.contains('h1', 'Novo produto')
  })

  it('Visits the Product list page', () => {
    cy.visit('/products')
    cy.contains('h1', 'Listagem de produtos')
  })

  it('Visits the Movement new page', () => {
    cy.visit('/movement/new')
    cy.contains('h1', 'Nova Movimentação')
  })

  it('Visits the Movement list page', () => {
    cy.visit('/movements')
    cy.contains('h1', 'Lucro por produto')
  })
})
