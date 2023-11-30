import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    getGif(category)
      .then( newImages => {
        setImages(newImages);
        setIsLoading(false);
      });
  }, []);

  return {
    images: images,
    isLoading: isLoading
  }
  
}
