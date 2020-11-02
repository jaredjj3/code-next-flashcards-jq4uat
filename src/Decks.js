import React from "react";
import * as DeckAPI from "./data/DeckAPI";

const DECKS = DeckAPI.getAllDecks();

export const Decks = (props) => {
  const onDeckClick = (deck) => () => {
    props.onDeckClick(deck);
  }; 

  return (
    <ul className="nav nav-pills">
      {DECKS.map(deck => (
        <li className="nav-item" onClick={onDeckClick(deck)}>
          <a className="nav-link" href="#">
            {deck.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
