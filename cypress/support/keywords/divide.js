Cypress.Commands.add('divide', () => {
    cy.get('.z7BZJb').type('55578')
    cy.get(':nth-child(2) > :nth-child(4) > .PaQdxb > .XRsWPe').click()
    cy.get('.z7BZJb').type('2')
    cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click()
    cy.contains('27789')
})