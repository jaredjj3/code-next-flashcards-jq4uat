import React, { useState } from "react";
import { Card } from './Card';
import { Decks } from './Decks';
import { Progress } from './Progress';
import * as DeckAPI from './data/DeckAPI';

const DEFAULT_DECK = DeckAPI.getAllDecks()[0];

export const App = () => {
  const [deck, setDeck] = useState(DEFAULT_DECK);
  const [ndx, setNdx] = useState(0);
  const [results, setResults] = useState([]);

  // TODO: Randomize the cards when a new deck is clicked.
  const onDeckClick = (nextDeck) => {
    setDeck(nextDeck);
    setNdx(0);
    setResults([]);
  };

  return (
    <div className="container">
      <h1>Flashcards</h1>
      <Decks onDeckClick={onDeckClick} />
      <hr />
      <h4>Selected deck: {deck.name}</h4>
      <Progress />
      <Card card={deck.cards[ndx]} />
    </div>
  );
};
