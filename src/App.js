import React, { useState } from "react";
import { Card } from "./Card";
import { Decks } from "./Decks";
import * as DeckAPI from "./data/DeckAPI";

const shuffle = (arr) => {
  const result = [...arr];
  for (let ndx = 0; ndx < arr.length; ndx++) {
    const i1 = Math.floor(Math.random() * arr.length);
    const i2 = Math.floor(Math.random() * arr.length);
    [result[i1], result[i2]] = [result[i2], result[i1]];
  }
  return result;
};

const DEFAULT_DECK = DeckAPI.getAllDecks()[0];

export const App = () => {6
  const [deck, setDeck] = useState(DEFAULT_DECK);
  const [ndx, setNdx] = useState(0);
  const [easyCards, setEasyCards] = useState([]);
  const [hardCards, setHardCards] = useState([]);
  const [resultsVisible, setResultsVisible] = useState(false);

  const numDone = ndx;
  const numTotal = deck.cards.length;
  const progress = resultsVisible ? 100 : (numDone / numTotal) * 100;

  // TODO: Randomize the cards when a new deck is clicked.
  const onDeckClick = nextDeck => {
    nextDeck.cards = shuffle(nextDeck.cards);
    setDeck(nextDeck);
    setNdx(0);
    setEasyCards([]);
    setHardCards([]);
  };

  const goToNextCard = () => {
    setNdx(ndx + 1);
  };

  const showResults = () => {
    setResultsVisible(true);
  };

  const markCard = (difficulty, card) => {
    if (difficulty === "easy") {
      const nextEasyCards = easyCards.map(card => ({ ...card }));
      nextEasyCards.push(card);
      setEasyCards(nextEasyCards);
    }

    if (difficulty === "hard") {
      const nextHardCards = hardCards.map(card => ({ ...card }));
      nextHardCards.push(card);
      setHardCards(nextHardCards);
    }
  };

  const onDifficultyButtonClick = (difficulty, card) => {
    markCard(difficulty, card);

    const isLastCard = ndx === deck.cards.length - 1;
    if (isLastCard) {
      showResults();
    } else {
      goToNextCard();
    }
  };

  return (
    <div className="container">
      <h1>Flashcards</h1>
      <Decks onDeckClick={onDeckClick} />
      <hr />
      <h4>Selected deck: {deck.name}</h4>
      <Card
        progress={progress}
        card={deck.cards[ndx]}
        onDifficultyButtonClick={onDifficultyButtonClick}
      />

      <hr />

      {resultsVisible && (
        <ul className="list-group">
          {hardCards.map((hardCard) => (
            <li className="list-group-item">
              {hardCard.front}
              <em>{hardCard.back}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
