import React, { useState } from "react";
import { Decks } from "./Decks";
import { Card } from "./Card";
import { Results } from "./Results";
import { Progress } from "./Progress";
import * as DeckAPI from "./data/DeckAPI";

const DEFAULT_DECK = DeckAPI.getAllDecks()[0];

export const App = () => {
  const [deck, setDeck] = useState(DEFAULT_DECK);
  const [ndx, setNdx] = useState(0);
  const [results, setResults] = useState([]);

  const isFinished = results.length === deck.cards.length;

  const onDeckClick = deck => {
    setDeck(deck);
    setNdx(0);
    setResults([]);
  };

  const goToNextCard = () => {
    const nextNdx = Math.min(ndx + 1, deck.cards.length - 1);
    setNdx(nextNdx);
  };

  const onEasyClick = card => {
    const nextResults = results.map(result => ({ ...result }));
    nextResults.push({ type: "easy", card });
    setResults(nextResults);
    goToNextCard();
  };

  const onHardClick = card => {
    const nextResults = results.map(result => ({ ...result }));
    nextResults.push({ type: "hard", card });
    setResults(nextResults);
    goToNextCard();
  };

  return (
    <div className="container">
      <h1>Flashcards</h1>

      <Decks onDeckClick={onDeckClick} />

      <hr />

      {!isFinished && (
        <>
          <Progress fraction={results.length / deck.cards.length} />

          <br />
          <Card
            card={deck.cards[ndx]}
            onEasyClick={onEasyClick}
            onHardClick={onHardClick}
          />
        </>
      )}

      {isFinished && (
        <>
          <br />
          <Results results={results} />
        </>
      )}
    </div>
  );
};
