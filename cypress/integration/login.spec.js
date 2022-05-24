describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('displays two todo items by default', () => {
        cy.get('[data-cy=title]').should('have.text', 'VuFire')
    })
})
