import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en componente AddCategory', () => {

  test('debe cambiar el valor del input', () => {
  
    render( <AddCategory onNewCategory={ () => {}} /> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Manolo' }} );
    
    expect(input.value).toBe('Manolo');
    // screen.debug();
    
    
  });

});