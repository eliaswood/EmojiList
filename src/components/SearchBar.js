import React from 'react';

const SearchBar = (props) => {

  return (
    <div>
      <form>
        <input
          type='text'
          value ={props.updatedTerm}
          onChange={() => props.onFormSubmit()}
          placeholder='Input Emoji'
        />

      </form>
      </div>
  )
}
export default SearchBar
