import { render } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';


describe('Pruebas en GifGridItem', () => {
  
  const title = 'Manolo';
  const url = 'https://manolo.com'

  test('debe hacer match con el snapshot', () => {
  
    const { container } = render( <GifGridItem title={ title } url={ url } /> );

    expect( container ).toMatchSnapshot();
    
  });

});