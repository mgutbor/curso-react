import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas sobre el componente CounterApp', () => {

    test('debe hacer match con el snapshot', async() => {

        const initialValue = 10;

        const { container } = render( <CounterApp value={initialValue} /> )

        expect(container).toMatchSnapshot(); 
    });

    test('debe mostrar el valor inicial si le mandamos 100 ', () => {
        
        render( <CounterApp value={100} /> );
        expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading', { level: 2}).innerHTML).toContain('100')
    });

});