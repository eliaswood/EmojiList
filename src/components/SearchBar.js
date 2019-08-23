import React, {useState} from 'react';

const SearchBar = (props) => {
  const [emojiEntry, setEmojiEntry] = useState('')


  const onFormSubmit = e => {
    e.preventDefault()

    props.onFormSubmit(emojiEntry)
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          ref={props.emojis}
          value ={emojiEntry}
          onChange={e => setEmojiEntry(e)}
          placeholder='Input Emoji'
        />

      </form>
      </div>
  )
}
export default SearchBar
