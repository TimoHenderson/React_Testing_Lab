describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display when number buttons are pressed', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '1234567890')
  })

  it('should update display when number buttons are pressed', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '7')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '35')
  })

  it('should be able to display positive numbers', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
  })

  it('should be able to display negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6')
  })

  it('should be able to display negative numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.5')
  })

  it('should be able to display very large numbers', () => {
    cy.get('#number1').click();
    for (let i = 0; i < 21; i++) {
      cy.get('#number0').click();
    }
    cy.get('.display').should('contain', '1e+21')
  })

  it('should be able to handle division by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', "Error- can't divide by 0")
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', "1")
  })



})