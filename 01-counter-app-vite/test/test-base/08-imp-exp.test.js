import { getHeroeById, getHeroesByOwner } from '../../src/test-base/08-imp-exp';


describe('Pruebas sobre la importacion-exportacion', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        
        const id = 1;

        const hero1 = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };
        const gethero = getHeroeById(id);

        expect(gethero).toEqual(hero1);

    });

    test('getHeroeById debe de retornar undefined si no se enceuntra', () => {
        
        const id = 6;

        const gethero = getHeroeById(id);

        expect(gethero).toBeFalsy();

    });

    test('getHeroesByOwner debe retornar los de DC', () => {

        const getDCHeroes = getHeroesByOwner('DC');

        const DCHeroes = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ];

        expect(getDCHeroes.length).toBe(3);
        expect(getDCHeroes).toEqual(DCHeroes);

    });

    test('getHeroesByOwner debe retornar los de Marvel', () => {

        const getMarvelHeroes = getHeroesByOwner('Marvel');

        const MarvelHeroes = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ];

        expect(getMarvelHeroes.length).toBe(2);
        expect(getMarvelHeroes).toEqual(MarvelHeroes);

    });


});