import { getGif } from "../../src/helpers/getGifs";


describe('Tests sobre el helper getGifs', () => {
  
  test('debe retornar un array de gifs ', async() => {
    
    const gifs = await getGif('Pokemon');

    // console.log(gifs);

    expect( gifs.length ).toBeGreaterThan(0);
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
    })

  });

});