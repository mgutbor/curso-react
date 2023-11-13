import { getImagen } from '../../src/test-base/11-async-await';

describe('Pruebas sobre async-await', () => {

    test('getImagen deberia devolver una URL de la imagen', async() => {

        const url = await getImagen();

        expect(typeof url).toBe('string');


    })

});