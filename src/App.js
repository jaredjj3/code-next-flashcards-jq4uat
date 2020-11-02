import React from "react";
import { Card } from './Card';
import { Decks } from './Decks';
import { Progress } from './Progress';

export const App = () => {
  return (
    <div className="container">
      <h1>Flashcards</h1>
      <Decks />
      <hr />
      <Progress />
      <Card />
    </div>
  );
};
