import React from 'react';
import EmojiBar from './EmojiBar';
import data from '.././emojis.json';
import '../app.css'


const EmojiList = ({emojiEntry}) => {

  const search = data.filter(emoji => {
    if (emoji.keywords.includes(emojiEntry)) {
      return (
        <div>
          {emoji}
        </div>
      )
    }});

  const list = search.map(emo => {
  return (
    <EmojiBar
      key={emo.name}
      emoji={emo.symbol}
      title={emo.title}
    />
  )});

  return <div>{list}</div>;
}

export default EmojiList;
