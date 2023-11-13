import { retornaArreglo } from '../../src/test-base/07-deses-arr';

describe('Pruebas de desestructurar arrays', () => {
    
    test('Debe retornar un string y un numero', () => {
        
        const [ letters, numbers ] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

    });
});