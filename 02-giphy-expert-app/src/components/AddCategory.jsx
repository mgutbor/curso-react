import { useState } from "react"

export const AddCategory = () => {
  
  const [inputValue, setInputValue] = useState('')
  
  const handlerInputValue = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <form onSubmit={ (event) => onSubmitForm(event)}>
      <input 
          type="text"
          placeholder="Buscar GIFS"
          value={ inputValue }
          onChange={ handlerInputValue }
      />
    </form>
  )
}
