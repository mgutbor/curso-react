import { getHeroeByIdAsync } from '../../src/test-base/09-promesas';

describe('Pruebas sobre la tareas asincronas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            })
    })

    test('getHeroeByIdAsync debe retornar un error si el heroe no existe', (done) => {

        const id = 6;

        getHeroeByIdAsync(id)
            .catch( error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${ id }`);
                done();
            })
    })

});