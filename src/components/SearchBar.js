import React from 'react';

const SearchBar = (props) => {

  let term = '';
  return (
    <div>
      <form>
        <input
          type='text'
          value ={props.updateTerm}
          onChange={() => props.onFormSubmit(term)}
          placeholder='Input Emoji'
        />

      </form>
      </div>
  )
}
export default SearchBar
