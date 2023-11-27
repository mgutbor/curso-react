import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiphyExpertApp = () => {

  const [categories, setCategories] = useState( ['Pokemon', 'Dragon ball'] );

  return (
    <>
      {/* titulo */}
      <h1>GiphyExpertApp</h1>

      {/* input */}
      <AddCategory onAddCategory={ setCategories } />

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
