import { useState } from "react"

export const AddCategory = ( { onAddCategory }) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const handlerInputValue = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onAddCategory((categories) => [...categories, inputValue]);
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmitForm}>
      <input 
          type="text"
          placeholder="Buscar GIFS"
          value={ inputValue }
          onChange={ handlerInputValue }
      />
    </form>
  )
}
