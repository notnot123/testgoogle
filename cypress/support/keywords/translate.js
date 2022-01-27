Cypress.Commands.add('translate', () => {
    cy.get('.gLFyf').type('แปลภาษา')
    //พิมพ์คำเพื่อค้าหาคำว่าแปลภาษาในgoogle
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    //กดปุ่มค้นหา
    cy.get('#tw-sl').click()
    //กดเพื่อเปลี่ยนภาษาให้เป็นภาษาต้นทาง
    cy.get('.language-list-unfiltered-langs-sl_list > :nth-child(3) > .item-selected').click()
    //เลือกภาษาต้นทาง
    cy.get('#tw-tl').click()
    //กดเพื่อเปลี่ยนภาษาให้เป็นภาษาปลายทาง
    cy.get(':nth-child(2) > .item-selected').click()
    //เลือกภาษาปลายทาง
    cy.get('#tw-source-text-container').type('login')
    //กรอกคำที่ต้องการแปล
    cy.contains('เข้าสู่ระบบ')
    //ตรวจสอบคำแปล
})