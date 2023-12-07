import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  
  const category = 'Pokemon';

  test('debe mostrar el loading inicialmente', () => {
    
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={ category } /> );

    //  screen.debug();

    expect( screen.getByText('Cargando...') );
    expect( screen.getByText(category) );

  });

  test('debe mostrar items cuando se cargan las imagenes desde fetchGifs', () => {
    
    const gifs = [
      {
        id: 'ABC',
        title: 'ABC',
        url: 'https://test1.com'
      },
      {
        id: 'ABC2',
        title: 'ABC2',
        url: 'https://test2.com'
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={ category } /> );

    // screen.debug();

    expect( screen.getAllByRole('img').length).toBe(2);

  });

});