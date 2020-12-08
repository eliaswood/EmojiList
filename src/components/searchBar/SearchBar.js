import React from 'react';
import { TextField } from "@material-ui/core";
import useStyles from "./SearchBar.styles";
import '../../app.css';

const SearchBar = ({ updatedTerm, onFormSubmit }) => {
  const classes = useStyles();

  return (
    <div>
      <form>
        <TextField
          className={classes.searchBar}
          variant="outlined"
          value ={updatedTerm}
          onChange={e => onFormSubmit(e)}
          placeholder='Input Emoji'
        />
      </form>
    </div>
  )
}
export default SearchBar
