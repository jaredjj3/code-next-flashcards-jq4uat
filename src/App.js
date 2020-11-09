import React, { useState } from "react";
import { Card } from "./Card";
import { Decks } from "./Decks";
import { Progress } from "./Progress";
import * as DeckAPI from "./data/DeckAPI";

const DEFAULT_DECK = DeckAPI.getAllDecks()[0];

const SIDES = {
  FRONT: "FRONT",
  BACK: "BACK"
};

export const App = () => {
  const [deck, setDeck] = useState(DEFAULT_DECK);
  const [ndx, setNdx] = useState(0);
  const [easyCards, setEasyCards] = useState([]);
  const [hardCards, setHardCards] = useState([]);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [side, setSide] = useState(SIDES.FRONT);

  // TODO: Randomize the cards when a new deck is clicked.
  const onDeckClick = nextDeck => {
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
      <Progress />
      <Card
        side={side}
        setSide={setSide}
        card={deck.cards[ndx]}
        onDifficultyButtonClick={onDifficultyButtonClick}
      />
    </div>
  );
};
