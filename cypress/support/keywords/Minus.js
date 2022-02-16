Cypress.Commands.add('minus', () => {
    cy.get('.z7BZJb').type('4325')
    cy.get(':nth-child(4) > :nth-child(4) > .PaQdxb > .XRsWPe').click()
    cy.get('.z7BZJb').type('325')
    cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click()
    cy.contains('4000')
})