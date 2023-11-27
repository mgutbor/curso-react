import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiphyExpertApp = () => {

  const [categories, setCategories] = useState( ['Pokemon', 'Dragon ball'] );

  const onAddCategory = (newCategory) => {
    if(categories.findIndex( item =>  newCategory.toLowerCase() === item.toLowerCase()) !== -1 ) return;
    // if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* titulo */}
      <h1>GiphyExpertApp</h1>

      {/* input */}
      <AddCategory 
        // onAddCategory={ setCategories }
        onNewCategory={ onAddCategory }
        />

      {/* listado de GIF */}
        <ol>
          { categories.map( category => {
              return <li key={ category }>{ category }</li>
            }
          )}
        </ol>
    </>
  )
}
