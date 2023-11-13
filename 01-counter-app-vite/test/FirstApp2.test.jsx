import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas sobre el componente FirstApp', () => {

    const title = 'Hola soy el titulo de la app';
    const subTitle = 'Subtitulo de la app';

    test('debe hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={title} />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "Hola soy el titulo de la app"', () => {
       
        render( <FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy;
    });

    test('debe mostrar el titulo en un h1', () => {
        
        render( <FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1}).innerHTML).toContain(title);
    });

    test('debe mostrar el subtitulo enviado por props', () => {
       
        render( <FirstApp title={title} subTitle={subTitle}/>);
        expect(screen.getAllByText(subTitle).length).toBe(2);
        // screen.debug();
    });

});