import React from "react";
import { Typography, Button, Card } from "@material-ui/core";
import "../../app.css";
import useStyles from "./EmojiItem.styles";

const copy = require("clipboard-copy");

const EmojiItem = ({ emoji, key, title }) => {
	const classes = useStyles();
	return (
		<Card className={classes.menuItem} key={key}>
			<Typography variant="h4">{emoji}</Typography>
			<Typography variant="h6">{title}</Typography>
			<Button onClick={() => copy(emoji)} className="copy-button">
				Copy Me
			</Button>
		</Card>
	);
};
export default EmojiItem;
