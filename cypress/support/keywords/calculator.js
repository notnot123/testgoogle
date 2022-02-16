Cypress.Commands.add('calculator', () => {
    cy.get('.gLFyf').type('google calculator')
    //พิมพ์คำเพื่อค้าหาคำว่าgoogle calculatorในgoogle
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    //กดปุ่มค้นหา
})