import React, { useState } from 'react';
import { Typography } from "@material-ui/core";
import SearchBar from './components/searchBar/SearchBar';
import EmojiList from './components/emojiList/EmojiList';
import './app.css'

const App = () => {
  const [emojiEntry, setEmojiEntry] = useState('')

  const onFormSubmit = (e, term) => {
    setEmojiEntry(e.target.value);
  }

  return (
    <div className='background'>
      <Typography variant="h2" className='title'>Emoji Search</Typography>
      <SearchBar
        onFormSubmit={onFormSubmit} updatedTerm={emojiEntry}
      />
      <EmojiList emojiEntry={emojiEntry}/>
    </div>
  )
}
export default App
