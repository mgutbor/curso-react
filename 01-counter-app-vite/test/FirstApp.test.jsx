import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas sobre el componente FirstApp', () => {

    // test('debe hacer match con el snapshot', async() => {

    //     const title = "Hola, soy una prueba";
    //     const subtitulo = 123;
    //     const { container } = render( <FirstApp title={title} subTitle={subtitulo}/> )

    //     expect(container).toMatchSnapshot(); 
    // });

    test('debe mostrar el titulo en un h1', async() => {

        const title = "Hola, soy una prueba";
        const { getByText, getByTestId } = render( <FirstApp title={title} /> )

        expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toContain(title);
    })

    test('debe mostrar el subtitulo enviado por props', async() => {

        const title = "Hola, soy una prueba";
        const subTitle = 'Subtitulo de la app';
        const { getByText } = render(
            <FirstApp 
                title={title}
                subTitle={subTitle}
            />
        );

        expect(getByText(subTitle)).toBeTruthy();
    })
});