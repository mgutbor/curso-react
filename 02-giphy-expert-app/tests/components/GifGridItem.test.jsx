import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';


describe('Pruebas en GifGridItem', () => {
  
  const title = 'Manolo';
  const url = 'https://manolo.com/';

  test('debe hacer match con el snapshot', () => {
  
    const { container } = render( <GifGridItem title={ title } url={ url } /> );

    expect( container ).toMatchSnapshot();
    
  });

  test('debe mostrar la imagen con el URL y el ALT indicado', () => {

    render( <GifGridItem title={ title } url={ url } /> );
    // screen.debug();

    const {src, alt} = screen.getByRole('img');

    // expect( screen.getByRole('img').src ).toBe( url );
    expect( src ).toBe( url );
    expect( alt ).toBe( title );

  });

  test('el texto dentro del parrafo ha de ser igual al indicado', () => {
    
    render( <GifGridItem title={ title } url={ url } /> );

    expect( screen.getByText(title)).toBeTruthy();

  });

});