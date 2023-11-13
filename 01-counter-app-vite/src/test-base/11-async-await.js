export const getImagen = async() => {

    try {

        const apiKey = 'QQfJXr0iRzFSrEi1l99KEbSH6h4a8XCm';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error);
        return 'No se encuentra la imagen';
    }
}