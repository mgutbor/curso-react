
describe('Puebas iniciales del curso', () => {
  
  test('prueba de comparacion inicial', () =>{
    
    // 1. Arrange
    const msg1 = 'Hola mundo';
  
    // 2. Act
    const msg2 = msg1.trim();
  
    // Assert
    expect(msg1).toBe(msg2);
    
  })

});
