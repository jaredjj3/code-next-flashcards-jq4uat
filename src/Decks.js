import React from "react";
import * as DeckAPI from "./data/DeckAPI";

const DECKS = DeckAPI.getAllDecks();

export const Decks = () => {
  return (
    <ul className="nav nav-pills">
      {DECKS.map(deck => (
        <li className="nav-item">
          <a className="nav-link" href="#">
            {deck.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
