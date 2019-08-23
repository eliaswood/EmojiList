import React,{useEffect} from 'react';

const emojis = require('node-emoji')

const EmojiList = () => {
console.log(emojis)
  useEffect(() => {
      const emojis = emojis.map(emo => (
      <div key={emo.name}>{emo.emoji}</div>
    ))
    return emojis
  })

 
  return (
    <div>
      <div>

      </div>
    </div>
  )
}
export default EmojiList;
