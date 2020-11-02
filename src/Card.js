import React, { useState } from "react";
import { Progress } from "./Progress";

export const Card = props => {
  const [side, setSide] = useState("front");

  const onFlipClick = () => {
    if (side === "front") {
      setSide("back");
    } else {
      setSide("front");
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header">
        <Progress />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.card.front}</h5>
        {side === "back" && (
          <p className="card-text">
            <em>{props.card.back}</em>
          </p>
        )}
        <button className="btn btn-primary btn-block" onClick={onFlipClick}>
          flip
        </button>

        <br />

        <div
          className="btn-group btn-block"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-danger"
            disabled={side === "front"}
          >
            hard
          </button>
          <button
            type="button"
            className="btn btn-success"
            disabled={side === "front"}
          >
            easy
          </button>
        </div>
      </div>
      <div className="card-footer text-muted">{side}</div>
    </div>
  );
};
