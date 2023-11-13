
test('esta prueba nodebe de fallar', () =>{
  if ( 0 === 0) {
    throw new Error('No se puede dividir entre cero');
  }

})