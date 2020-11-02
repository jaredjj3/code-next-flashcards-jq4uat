import React from "react";

export const Results = props => {
  const easy = props.results.filter(result => result.type === "easy");
  const hard = props.results.filter(result => result.type === "hard");

  return (
    <>
      <div className="alert alert-primary" role="alert">
        You found {easy.length} were easy and {hard.length} were hard!
      </div>

      {hard.length > 0 && (
        <>
          <h4>practice the hard ones</h4>
          <ul className="list-group">
            {hard.map((result, ndx) => (
              <li className="list-group-item" key={`hard-${ndx}`}>{result.card.front} <em>{result.card.back}</em></li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
