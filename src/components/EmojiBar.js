import React from 'react';
import '../app.css';

const copy = require('clipboard-copy');

const EmojiBar = (props) => {

  return (
    <div>
      <div
        className='list'
        key={props.key}
      >
        <div className='emoji-box'>
          <div>{props.emoji}</div>
          <div className='emoji-box-title'>
            {props.title}
          </div>
          <button
            onClick={()=> copy(props.emoji)}
          className='copy-button'>Copy Me</button>
        </div>
      </div>
    </div>
  )
}
export default EmojiBar;
