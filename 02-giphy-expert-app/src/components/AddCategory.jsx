import { useState } from "react";

export const AddCategory = ( { onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const handlerInputValue = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;

    onNewCategory(newInputValue);
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
