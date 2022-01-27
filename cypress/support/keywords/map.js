Cypress.Commands.add('map', () => {
    cy.get('.gLFyf').type('google map')
    //พิมพ์คำเพื่อค้าหาคำว่าgoogle mapในgoogle
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    //กดปุ่มค้นหา
    cy.get('[href="https://www.google.co.th/maps/@18.3170581,99.3986862,17z?hl=th"] > .LC20lb').click()
    //กดเพื่อเปิดหน้าgoogle map
    cy.get('#searchbox').type('มหาวิทยาลัยพะเยา')
    //กรอกสถานที่ที่ต้องการค้นหา
    cy.get('#searchbox-searchbutton').click()
    //กดค้นหา
    cy.contains('19, ตำบลแม่กา อำเภอเมืองพะเยา พะเยา 56000')
    //ตรวจสอบที่อยู่ที่ค้นหา
    cy.get(':nth-child(2) > .e2moi > .tXNTee').click()
    //เลือกโรงแรมเพื่อตรวจสอบโรงแรมที่ใกล้มหาวิทยาลัยพะเยา
    cy.contains('โรงแรม')
    //ตรวจสอบโรงแรม
})