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

  test('debe de llamar a onNewCategory si el input tiene un valor', () => {
    
    const inputValue = 'Manolo'

    render( <AddCategory onNewCategory={ () => {}} /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    
    fireEvent.input( input, { target: { value: inputValue }} );
    fireEvent.submit( form );

    // screen.debug();

    expect(input.value).toBe('');
  });

});