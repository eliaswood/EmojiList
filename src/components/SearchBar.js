import React from 'react';
import '../app.css';

const SearchBar = (props) => {

  return (
    <div >
      <form>
        <input
          className='search-bar'
          type='text'
          value ={props.updatedTerm}
          onChange={(e) => props.onFormSubmit(e)}
          placeholder='Input Emoji'
        />
      </form>
    </div>
  )
}
export default SearchBar
