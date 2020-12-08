import React from "react";
import { Typography, Button } from "@material-ui/core";
import "../../app.css";

const copy = require("clipboard-copy");

const EmojiItem = ({ emoji, key, title }) => {
	return (
		<div>
			<div className="list" key={key}>
				<div className="emoji-box">
					<Typography variant="h4">{emoji}</Typography>
					<Typography variant="h6">{title}</Typography>
					<Button onClick={() => copy(emoji)} className="copy-button">
						Copy Me
					</Button>
				</div>
			</div>
		</div>
	);
};
export default EmojiItem;
