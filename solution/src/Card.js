import React, { useState, useEffect } from "react";

export const Card = props => {
  const [isFrontVisible, setFrontVisibility] = useState(true);

  const onFlipClick = () => {
    setFrontVisibility(!isFrontVisible);
  };

  const onEasyClick = () => {
    props.onEasyClick(props.card);
  };

  const onHardClick = () => {
    props.onHardClick(props.card);
  };

  useEffect(() => {
    setFrontVisibility(true);
  }, [props.card]);

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{props.card.front}</h5>

        {!isFrontVisible && (
          <p className="card-text muted">
            <em>{props.card.back}</em>
          </p>
        )}

        <button
          className="btn btn-outline-secondary btn-block"
          onClick={onFlipClick}
        >
          flip
        </button>
        <br />
        <div className="btn-group btn-block" role="group">
          <button
            className="btn btn-danger"
            disabled={isFrontVisible}
            onClick={onHardClick}
          >
            hard
          </button>
          <button
            className="btn btn-success"
            disabled={isFrontVisible}
            onClick={onEasyClick}
          >
            easy
          </button>
        </div>
      </div>
      <div className="card-footer text-muted">
        {isFrontVisible ? "front" : "back"}
      </div>
    </div>
  );
};
