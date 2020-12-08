import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import EmojiBar from "../components/emojiItem/EmojiItem";

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it("renders with or without a name", () => {
	act(() => {
		render(<EmojiBar />, container);
	});
	// make assertions
});

it("renders user data", async () => {
	const fakeUser = {
		title: "happy",
		key: "32",
		emoji: "emoji",
	};
	jest.spyOn(global, "fetch").mockImplementation(() =>
		Promise.resolve({
			json: () => Promise.resolve(fakeUser),
		})
	);
	await act(async () => {
		render(<EmojiBar />, container);
    });
    
	expect(container.querySelector("button").textContent).toBe("Copy Me");
	// expect(container.textContent).toContain(fakeUser.title);
	// expect(container.textContent).toContain(fakeUser.key);
	// expect(container.textContent).toContain(fakeUser.emoji);

	// remove the mock to ensure tests are completely isolated
	global.fetch.mockRestore();
});
