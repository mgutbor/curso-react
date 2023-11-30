export const getGif = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=QQfJXr0iRzFSrEi1l99KEbSH6h4a8XCm&q=${category}&limit=10`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  
  const gift = data.map( img => ({
    id: img.id,
    title: img. title,
    url: img.images.downsized_medium.url
  }));
  
  console.log(gift);
  return gift;
}