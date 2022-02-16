Cypress.Commands.add('multiply', () => {
    cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(1) > .PaQdxb > .XRsWPe').click()
    cy.get(':nth-child(3) > :nth-child(4) > .PaQdxb > .XRsWPe').click()
    cy.get('.z7BZJb').type('63')
    cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click()
    cy.contains('441')
})