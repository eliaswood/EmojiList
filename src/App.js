import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import EmojiList from './components/EmojiList';
import './app.css'

const App = () => {
  const [emojiEntry, setEmojiEntry] = useState('b')

  const onFormSubmit = (e, term) => {
    setEmojiEntry(e.target.value);
  }

  return (
    <div >
      <h1 className='title'>Emoji Search</h1>
      <SearchBar
        onFormSubmit={onFormSubmit} updatedTerm={emojiEntry}
      />
      <EmojiList emojiEntry={emojiEntry}/>
    </div>
  )
}
export default App
