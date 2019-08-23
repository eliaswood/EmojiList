import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import EmojiList from './components/EmojiList';

const emojis = require('node-emoji')

const App = () => {

  onFormSumbit = () => {
    
  }


  return (
    <div>
      <h1>Emoji Search</h1>
      <SearchBar onFormSubmit={null} />
      <EmojiList emojis={}/>


    </div>
  )
}
export default App
