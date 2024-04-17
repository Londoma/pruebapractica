describe('Prueba de compras en Demoblaze', () => {
  it('Agregar dos productos al carrito, visualizar el carrito, completar el formulario de compra y finalizar  compra', () => {
    cy.visit('https://www.demoblaze.com');

    // Agregar dos productos al carrito
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.contains('Home').click();
    cy.contains('Nexus 6').click();
    cy.contains('Add to cart').click();

    // Visualizar el carrito
    cy.contains('Cart').click();

    // Completar el formulario de compra
    cy.contains('Place Order').click();
    cy.get('#name').type('Juliana Londoño');
    cy.get('#country').type('Colombia');
    cy.get('#city').type('Dosquebradas');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('05');
    cy.get('#year').type('2028');
    cy.contains('Purchase').click();

    // Finalizar la compra
    cy.contains('Purchase').click();
    cy.contains('OK').click();

  });
});