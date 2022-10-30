import { useState } from 'react';
import css from './SearchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  function haldleOnChange(event) {
    setInput(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
  };

  return (
    <div className={css.searchFormWrapper}>
      <form className={css.searchForm} onSubmit={handleOnSubmit} autofocus autoComplete='off'>
        <button className={css.searchFormButton} type='submit'>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>
        <input className={css.searchFormInput}
               type='text'
               name='input'
               autoFocus
               required
               placeholder='Search films'
               onChange={haldleOnChange}
               value={input}
        />
      </form>
    </div>
  );
};


SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
