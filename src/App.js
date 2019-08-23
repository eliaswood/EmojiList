import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import EmojiList from './components/EmojiList';


const App = () => {

  const [emojiEntry, setEmojiEntry] = useState('b')


  const onFormSubmit = (term) => {

    setEmojiEntry(term);

  }



  return (
    <div>
      <h1>Emoji Search</h1>
      <SearchBar onFormSubmit={onFormSubmit} updatedTerm={emojiEntry} />
      <EmojiList emojiEntry={emojiEntry}/>


    </div>
  )
}
export default App
