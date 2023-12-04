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
    
    const inputValue = 'Manolo';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form', { name: 'form'});

    expect(input.value).toBe('');
    expect(form).toBeTruthy();
    
    fireEvent.input( input, { target: { value: inputValue }} );
    fireEvent.submit( form );


    // screen.debug();

    expect( onNewCategory ).toHaveBeenCalled();
    
    // Para un numero de llamadas concreto
    //expect( onNewCategory ).toHaveBeenCalledTimes(1);

    // evaluamos si ha sido llamada la funcion con el parametro de entrada indicado
    expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
  });

  test('No debe llamar a onNewCategory si el input esta vacio', () => {
    
    const inputValue = 'Manolo';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const form = screen.getByRole('form', { name: 'form'});
    
    fireEvent.submit( form );


    // screen.debug();

    // expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();

  });

});