import DECKS from './DECKS.json';

export const getAllDecks = () => DECKS;

export const getDeck = (name) => DECKS.find(deck => deck.name === name);
