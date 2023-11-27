import { useState } from "react";

export const GiphyExpertApp = () => {

  const [categories, setCategories] = useState( ['Pokemon', 'Dragon ball'] );

  console.log(categories);
  return (
    <>
      {/* titulo */}
      <h1>GiphyExpertApp</h1>

      {/* input */}

      {/* listado de GIF */}
        <ol>
          { categories.map( category => {
              return <li key={ category }>{ category }</li>
            }
          )};
        </ol>
    </>
  )
}