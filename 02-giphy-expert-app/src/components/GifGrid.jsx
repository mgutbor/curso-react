import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ( { category } ) => {

  const [images, setImages] = useState([])

  useEffect( () => {
    getGif(category)
      .then( newImages => setImages(newImages));
  }, []);

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
      { 
        images.map( ( image ) => (
          <GifGridItem 
            key={image.id}
            {...image}
          />
        ))
      }
      </div>
    </>
  )
}
