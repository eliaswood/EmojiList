import React from 'react';
import EmojiBar from '../emojiItem/EmojiItem';
import data from '../../emojis.json';
import useStyles from "./EmojiList.styles"


const EmojiList = ({emojiEntry}) => {
  const classes = useStyles();

  const search = data.filter(emoji => {
    if (emoji.keywords.includes(emojiEntry)) {
      return (
        <div>
          {emoji}
        </div>
      )
    }
    return null
  });

  const list = search.map(emo => {
    return (
      <EmojiBar
        key={emo.name}
        emoji={emo.symbol}
        title={emo.title}
      />
    )
  });

  return <div className={classes.list}>{list}</div>;
}

export default EmojiList;
