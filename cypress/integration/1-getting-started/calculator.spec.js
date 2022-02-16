describe('example to-do app', () => {
    beforeEach(() => {
      
    })
  
    it('plus', () => {
        cy.openwebsite()
        cy.calculator()
        cy.plus()
        cy.wait(5000)
    })
    it('multiply', () => {
        cy.openwebsite()
        cy.calculator()
        cy.multiply()
        cy.wait(5000)
    })
    it('divide', () => {
        cy.openwebsite()
        cy.calculator()
        cy.divide()
        cy.wait(5000)
    })
    it('minus', () => {
        cy.openwebsite()
        cy.calculator()
        cy.minus()
        cy.wait(5000)
    })
    }
)