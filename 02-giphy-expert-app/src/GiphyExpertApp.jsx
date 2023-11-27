import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiphyExpertApp = () => {

  const [categories, setCategories] = useState( ['Pokemon'] );

  const onAddCategory = (newCategory) => {
    if(categories.findIndex( item =>  newCategory.toLowerCase() === item.toLowerCase()) !== -1 ) return;
    // if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GiphyExpertApp</h1>

      <AddCategory onNewCategory={ onAddCategory } />

      { 
        categories.map( (category) => (
          <GifGrid 
            key={category} 
            category={category}
          />
        ))
      }
    </>
  )
}
