import { getUser, getUsuarioActivo } from '../../src/test-base/05-funciones';

describe('Pruebas sobre funciones', () => {
    
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser()

        expect(testUser).toEqual(user);

    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = "Manuel";

        const testUser = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo(name)

        expect(testUser).toEqual(user);

    });
});