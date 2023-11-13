import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas sobre el componente FirstApp', () => {

    test('debe hacer match con el snapshot', async() => {

        const title = "Hola, soy una prueba";
        const subtitulo = 123;
        render( <FirstApp title={title} subTitle={subtitulo}/> )
    })
});