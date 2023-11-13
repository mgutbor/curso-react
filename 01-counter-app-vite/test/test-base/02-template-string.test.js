import { getSaludo } from '../../src/test-base/02-template-string';

describe('Pruebas sobre el template string', () => {
    test('getSaludo debe retornar "Hola Manolo"', () => {
        
        const name = "Manolo";
        
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`);
    });
});