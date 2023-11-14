import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas sobre el componente CounterApp', () => {

    const initialValue = 10;

    test('debe hacer match con el snapshot', async() => {

        const { container } = render( <CounterApp value={initialValue} /> )

        expect(container).toMatchSnapshot(); 
    });

    test('debe mostrar el valor inicial si le mandamos 100 ', () => {
        
        render( <CounterApp value={100} /> );
        expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading', { level: 2}).innerHTML).toContain('100')
    });

    test('debe incrementar con el boton +1', () => {
        
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('debe decrementar con el boton -1', () => {
        
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('debe volver al valor inicial con el boton Reset', () => {
        
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('Reset'));

        expect(screen.getByText('10')).toBeTruthy();

        // screen.debug();
    });

});