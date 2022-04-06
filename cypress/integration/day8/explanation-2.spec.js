describe('day8/explanation-2', () => {
  const delay = 0;

  it('Should open the app', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').should('have.text', 0);
  });

  it('Should increment the counter', () => {
    cy.wait(delay);
    cy.get('button.increment').click();
    cy.get('h1').should('have.text', 1);
  });

  it('Should decrement the counter', () => {
    cy.wait(delay);
    cy.get('button.decrement').click();
    cy.get('h1').should('have.text', 0);
  });

  it('Should increment counter by 10', () => {
    cy.wait(delay);
    cy.get('input').type('{selectall}').type('10');
    cy.wait(delay);
    cy.get('button.increment').click();
    cy.get('h1').should('have.text', 10);
  });

  it('Should decrement counter by 5', () => {
    cy.wait(delay);
    cy.get('input').type('{selectall}').type('5');
    cy.wait(delay);
    cy.get('button.decrement').click();
    cy.get('h1').should('have.text', 5);
  });
});
