import React,{useEffect} from 'react';

const emojis = require('node-emoji')

const EmojiList = ({emojiEntry}) => {
  console.log(emojis)

  const search = emojis.search(emojiEntry)

  const list = search.map(emo => {
  return <div key={emo.name}>{emo.emoji}</div>
  })

  return (
    <div>
      <div>
        {list}
      </div>
    </div>
  )
}
export default EmojiList;
