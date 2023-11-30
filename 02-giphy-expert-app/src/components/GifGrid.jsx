import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";

export const GifGrid = ( { category } ) => {

  const [images, setImages] = useState([])

  useEffect( () => {
    getGif(category)
      .then( newImages => setImages(newImages));
  }, []);

  return (
    <>
      <h3>{ category }</h3>
      <ol>
      { images.map( ({id, title}) => {
          return <li key={ id }>{ title }</li>
        })
      }
      </ol>
    </>
  )
}
