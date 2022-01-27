Cypress.Commands.add('search', () => {
        cy.get('.gLFyf').type('riot login')
        //พิมพ์คำเพื่อค้าหาคำว่าriot loginในgoogle
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
        //กดปุ่มค้นหา
        cy.contains('Sign In - Riot Games')
        //เช็คผลการค้นหาว่ามีคำว่าSign In - Riot Gamesหรือไม่
  })


