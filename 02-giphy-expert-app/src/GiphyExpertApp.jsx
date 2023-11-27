import { useState } from "react";

export const GiphyExpertApp = () => {

  const [categories, setCategories] = useState( ['Pokemon', 'Dragon ball'] );

  const handleButtonClick = () => {
    const newCategory = "Oliver y Benji";
    setCategories ([...categories, newCategory])
  }
  return (
    <>
      {/* titulo */}
      <h1>GiphyExpertApp</h1>

      {/* input */}

      {/* listado de GIF */}
        <button onClick={handleButtonClick}>Agregar</button>
        <ol>
          { categories.map( category => {
              return <li key={ category }>{ category }</li>
            }
          )}
        </ol>
    </>
  )
}
