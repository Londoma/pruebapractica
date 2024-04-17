describe('Prueba de flujo de compras en Demoblaze', () => {
    it('Agrega dos productos al carrito, visualiza el carrito, completa el formulario de compra y finaliza la compra', () => {
      cy.visit('https://www.demoblaze.com');
  
      // Agregar dos productos al carrito
      cy.contains('Samsung galaxy s6').click();
      cy.contains('Add to cart').click();
      cy.contains('Home').click();
      cy.contains('Nokia lumia 1520').click();
      cy.contains('Add to cart').click();
  
      // Visualizar el carrito
      cy.contains('Cart').click();
  
      // Completar el formulario de compra
      cy.contains('Place Order').click();
      cy.get('#name').type('Nombre de Prueba');
      cy.get('#country').type('País de Prueba');
      cy.get('#city').type('Ciudad de Prueba');
      cy.get('#card').type('1234567890123456');
      cy.get('#month').type('01');
      cy.get('#year').type('2025');
      cy.contains('Purchase').click();
  
      // Finalizar la compra
      cy.contains('OK').click();
    });
  });