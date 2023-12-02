import { useState } from "react";
import PropTypes from 'prop-types';

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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
