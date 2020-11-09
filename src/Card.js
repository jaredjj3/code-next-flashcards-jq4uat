import React, { useState, useEffect } from "react";
import { Progress } from "./Progress";

const SIDES = {
  FRONT: "FRONT",
  BACK: "BACK"
};

export const Card = props => {
  const [side, setSide] = useState(SIDES.FRONT);

  const isHardDisabled = side === SIDES.FRONT;
  const isEasyDisabled = side === SIDES.FRONT;

  const onFlipClick = () => {
    if (side === SIDES.FRONT) {
      setSide(SIDES.BACK);
    } else {
      setSide(SIDES.FRONT);
    }
  };

  useEffect(() => {
    setSide(SIDES.FRONT);
  }, [props.card])

  const onDifficultyButtonClick = (difficulty) => () => {
    props.onDifficultyButtonClick(difficulty, props.card);
  };

  return (
    <div className="card text-center">
      <div className="card-header">
        <Progress />
      </div>

      <div className="card-body">
        <h5 className="card-title">{props.card.front}</h5>
        {side === SIDES.BACK && (
          <p className="card-text">
            <em>{props.card.back}</em>
          </p>
        )}
        <button className="btn btn-primary btn-block" onClick={onFlipClick}>
          flip
        </button>

        <br />

        <div className="btn-group btn-block" role="group">
          <button
            type="button"
            className="btn btn-danger"
            disabled={isHardDisabled}
            onClick={onDifficultyButtonClick('hard')}
          >
            hard
          </button>
          <button
            type="button"
            className="btn btn-success"
            disabled={isEasyDisabled}
            onClick={onDifficultyButtonClick('easy')}
          >
            easy
          </button>
        </div>
      </div>
      <div className="card-footer text-muted">{side}</div>
    </div>
  );
};
