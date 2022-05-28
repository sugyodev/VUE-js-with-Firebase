describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('app title should be VuFire', () => {
        cy.get('[data-cy=title]').should('have.text', 'VuFire')
    })
})
